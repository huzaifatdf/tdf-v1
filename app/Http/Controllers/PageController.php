<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Http\Requests\StorePageRequest;
use App\Http\Requests\UpdatePageRequest;
use App\Models\Form;
use App\Models\Pagesection;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;


class PageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
     public function index(Request $request)
    {
           // Get sort, filters, and pagination from request
        $sort = $request->input('sort', []);
        $filters = $request->input('filters', []);
        $perPage = $request->input('perPage', 10);

        $query = Page::query();

        // Apply sorting
        if (!empty($sort['key']) && !empty($sort['order'])) {
            $query->orderBy($sort['key'], $sort['order']);
        }

        // Apply filters
        if (!empty($filters['title'])) {
            $query->where('title', 'like', '%'.$filters['title'].'%');
        }

        $pages = $query->paginate($perPage);

        return Inertia::render('Page/List', [
            'pages' => $pages,
            'filters' => $filters,
            'sort' => $sort,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Page/Add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePageRequest $request)
    {
        $page = Page::create($request->all());
        session()->flash('message', 'Page created successfully.');
        return redirect()->route('page.index');

    }

    /**
     * Display the specified resource.
     */
    public function show(Page $page)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $page = Page::findOrFail($id);
        $page->load(['sections' => function($query) {
            $query->orderBy('priority', 'asc');
        }]);
        $forms = Form::where('status','active')->get();
        //get all components from resources/js/Components/frontend
        $componentsWithPath = glob(resource_path('js/Components/frontend/*.jsx'));
        $components = [];
        foreach ($componentsWithPath as $component) {
            $componentName = basename($component);
            $components[] = str_replace('.jsx', '', $componentName);
        }

        return Inertia::render('Page/Edit', [
            'page' => $page,
            'sections' => $page->sections,
            'forms' => $forms,
            'components' => $components
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    // public function update(UpdatePageRequest $request, Page $page)
    // {
    //      $page->update($request->all());
    //     session()->flash('message', 'Page updated successfully.');
    //     return redirect()->route('page.index');
    // }

    // /**
    //  * Remove the specified resource from storage.
    //  */
    // public function destroy(Page $page)
    // {
    //     $page->delete();
    //     session()->flash('message', 'Page deleted successfully.');
    //     return redirect()->route('page.index');
    // }

    public function update(UpdatePageRequest $request, $id)
    {
        $page = Page::findOrFail($id);
        DB::beginTransaction();

        try {
            // Update the page
            $pageData = $request->except('sections', '_method');
            $pageData['show_in_sitemap'] = $request->boolean('show_in_sitemap');

            $page->update($pageData);

            // Handle sections if provided
            if ($request->has('sections') && is_array($request->sections)) {
                $this->saveSections($page, $request->sections);
            }

            DB::commit();

            session()->flash('message', 'Page updated successfully.');
            return redirect()->route('page.index');

        } catch (\Exception $e) {
            DB::rollback();

            return back()->withErrors([
                'error' => 'Failed to update page: ' . $e->getMessage()
            ])->withInput();
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $page = Page::findOrFail($id);


        DB::beginTransaction();

        try {
            // Delete associated sections first
            $page->sections()->delete();

            // Delete the page
            $page->delete();

            DB::commit();

            session()->flash('message', 'Page deleted successfully.');
            return redirect()->route('page.index');

        } catch (\Exception $e) {
            DB::rollback();

            return back()->withErrors([
                'error' => 'Failed to delete page: ' . $e->getMessage()
            ]);
        }
    }

    /**
     * Save sections for a page
     */
    private function saveSections(Page $page, array $sections)
    {
        // Get existing section IDs
        $existingSectionIds = $page->sections()->pluck('id')->toArray();
        $updatedSectionIds = [];

        foreach ($sections as $index => $sectionData) {
            // Validate section data
            $validatedData = $this->validateSectionData($sectionData);
            $validatedData['priority'] = $index; // Use array index as priority

            if (isset($sectionData['id']) && !isset($sectionData['isNew'])) {
                // Update existing section
                $section = $page->sections()->find($sectionData['id']);
                if ($section) {
                    $section->update($validatedData);
                    $updatedSectionIds[] = $section->id;
                }
            } else {
                // Create new section
                $validatedData['page_id'] = $page->id;
                $section = Pagesection::create($validatedData);
                $updatedSectionIds[] = $section->id;
            }
        }

        // Delete sections that are no longer present
        $sectionsToDelete = array_diff($existingSectionIds, $updatedSectionIds);
        if (!empty($sectionsToDelete)) {
            $page->sections()->whereIn('id', $sectionsToDelete)->delete();
        }
    }

    /**
     * Validate section data
     */
    private function validateSectionData(array $data)
    {
        $allowedTypes = ['text', 'image', 'video', 'html', 'form', 'table', 'component', 'accordion'];
        $allowedStatuses = ['draft', 'published'];
        $allowedLangs = ['en', 'ur', 'ar'];

        return [
            'type' => in_array($data['type'] ?? 'html', $allowedTypes) ? $data['type'] : 'html',
            'lang' => in_array($data['lang'] ?? 'en', $allowedLangs) ? $data['lang'] : 'en',
            'content' => $data['content'] ?? '',
            'status' => in_array($data['status'] ?? 'draft', $allowedStatuses) ? $data['status'] : 'draft',
            'priority' => (int)($data['priority'] ?? 0),
        ];
    }

    /**
     * Duplicate a page with its sections
     */
    public function duplicate(Page $page)
    {
        DB::beginTransaction();

        try {
            // Create new page
            $newPageData = $page->toArray();
            unset($newPageData['id'], $newPageData['created_at'], $newPageData['updated_at'], $newPageData['deleted_at']);

            // Modify slug and title to avoid conflicts
            $newPageData['slug'] = $page->slug . '-copy-' . time();
            $newPageData['title'] = $page->title . ' (Copy)';
            $newPageData['status'] = 'draft';

            $newPage = Page::create($newPageData);

            // Duplicate sections
            foreach ($page->sections as $section) {
                $newSectionData = $section->toArray();
                unset($newSectionData['id'], $newSectionData['created_at'], $newSectionData['updated_at'], $newSectionData['deleted_at']);

                $newSectionData['page_id'] = $newPage->id;
                $newSectionData['status'] = 'draft';

                Pagesection::create($newSectionData);
            }

            DB::commit();

            session()->flash('message', 'Page duplicated successfully.');
            return redirect()->route('page.edit', $newPage);

        } catch (\Exception $e) {
            DB::rollback();

            return back()->withErrors([
                'error' => 'Failed to duplicate page: ' . $e->getMessage()
            ]);
        }
    }

    /**
     * Bulk update sections order
     */
    public function updateSectionsOrder(Request $request, Page $page)
    {
        $request->validate([
            'sections' => 'required|array',
            'sections.*.id' => 'required|exists:pagesections,id',
            'sections.*.priority' => 'required|integer|min:0'
        ]);

        DB::beginTransaction();

        try {
            foreach ($request->sections as $sectionData) {
                $page->sections()
                     ->where('id', $sectionData['id'])
                     ->update(['priority' => $sectionData['priority']]);
            }

            DB::commit();

            return response()->json(['message' => 'Section order updated successfully.']);

        } catch (\Exception $e) {
            DB::rollback();

            return response()->json([
                'error' => 'Failed to update section order: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Delete a specific section
     */
    public function deleteSection(Page $page, Pagesection $section)
    {
        if ($section->page_id !== $page->id) {
            return response()->json(['error' => 'Section does not belong to this page.'], 404);
        }

        try {
            $section->delete();

            return response()->json(['message' => 'Section deleted successfully.']);

        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to delete section: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Preview page with sections
     */
    public function preview(Page $page)
    {
        $page->load(['sections' => function($query) {
            $query->orderBy('priority', 'asc');
        }]);

        return Inertia::render('Page/Preview', [
            'page' => $page
        ]);
    }

    /**
     * Export page data (for backup/migration)
     */
    public function export(Page $page)
    {
        $page->load('sections');

        $exportData = [
            'page' => $page->toArray(),
            'sections' => $page->sections->toArray(),
            'export_date' => now()->toISOString(),
            'version' => '1.0'
        ];

        return response()->json($exportData)
                        ->header('Content-Disposition', 'attachment; filename="page-' . $page->slug . '.json"');
    }

    /**
     * Import page data
     */
    public function import(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:json'
        ]);

        DB::beginTransaction();

        try {
            $fileContent = file_get_contents($request->file('file')->getRealPath());
            $importData = json_decode($fileContent, true);

            if (!$importData || !isset($importData['page']) || !isset($importData['sections'])) {
                throw new \Exception('Invalid import file format.');
            }

            // Create page
            $pageData = $importData['page'];
            unset($pageData['id'], $pageData['created_at'], $pageData['updated_at'], $pageData['deleted_at']);

            // Ensure unique slug
            $originalSlug = $pageData['slug'];
            $counter = 1;
            while (Page::where('slug', $pageData['slug'])->exists()) {
                $pageData['slug'] = $originalSlug . '-imported-' . $counter;
                $counter++;
            }

            $pageData['title'] = $pageData['title'] . ' (Imported)';
            $pageData['status'] = 'draft';

            $page = Page::create($pageData);

            // Create sections
            foreach ($importData['sections'] as $sectionData) {
                unset($sectionData['id'], $sectionData['created_at'], $sectionData['updated_at'], $sectionData['deleted_at']);
                $sectionData['page_id'] = $page->id;
                $sectionData['status'] = 'draft';

                Pagesection::create($sectionData);
            }

            DB::commit();

            session()->flash('message', 'Page imported successfully.');
            return redirect()->route('page.edit', $page);

        } catch (\Exception $e) {
            DB::rollback();

            return back()->withErrors([
                'error' => 'Failed to import page: ' . $e->getMessage()
            ]);
        }
    }
}
