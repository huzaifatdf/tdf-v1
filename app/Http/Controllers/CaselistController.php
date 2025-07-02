<?php

namespace App\Http\Controllers;

use App\Models\Caselist;
use App\Http\Requests\StoreCaselistRequest;
use App\Http\Requests\UpdateCaselistRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;


class CaselistController extends Controller
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

        $query = Caselist::query();

        // Apply sorting
        if (!empty($sort['key']) && !empty($sort['order'])) {
            $query->orderBy($sort['key'], $sort['order']);
        }

        // Apply filters
        if (!empty($filters['title'])) {
            $query->where('title', 'like', '%'.$filters['title'].'%');
        }

        $cases = $query->paginate($perPage);

        return Inertia::render('Case/List', [
            'cases' => $cases,
            'filters' => $filters,
            'sort' => $sort,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
                $additionalDataStructure = [
            'Detail' => [
                'subtitle' => ['type' => 'text', 'label' => 'subtitle', 'required' => false],
                'website' => ['type' => 'text', 'label' => 'website', 'required' => false],
                'the_beginning_image' => ['type' => 'text', 'label' => 'The Beginning Image', 'required' => false],
                'the_beginning' => ['type' => 'text', 'label' => 'The Beginning', 'required' => false],
            ],
            'Our Work' => [
                'title' => ['type' => 'text', 'label' => 'title', 'required' => false],
                'description' => ['type' => 'text', 'label' => 'description', 'required' => false],
            ],


            'Service' =>[

                'title_1' => ['type' => 'text', 'label' => '1 Title', 'required' => false],
                'image_1' => ['type' => 'text', 'label' => '1 Image', 'required' => false],

                'title_2' => ['type' => 'text', 'label' => '2 Title', 'required' => false],
                'image_2' => ['type' => 'text', 'label' => '2 Image', 'required' => false],

                'title_3' => ['type' => 'text', 'label' => '3 Title', 'required' => false],
                'image_3' => ['type' => 'text', 'label' => '3 Image', 'required' => false],

                'title_4' => ['type' => 'text', 'label' => '4 Title', 'required' => false],
                'image_4' => ['type' => 'text', 'label' => '4 Image', 'required' => false],

                'title_5' => ['type' => 'text', 'label' => '5 Title', 'required' => false],
                'image_5' => ['type' => 'text', 'label' => '5 Image', 'required' => false],

                'title_6' => ['type' => 'text', 'label' => '6 Title', 'required' => false],
                'image_6' => ['type' => 'text', 'label' => '6 Image', 'required' => false],

                'title_7' => ['type' => 'text', 'label' => '7 Title', 'required' => false],
                'image_7' => ['type' => 'text', 'label' => '7 Image', 'required' => false],

                'title_8' => ['type' => 'text', 'label' => '8 Title', 'required' => false],
                'image_8' => ['type' => 'text', 'label' => '8 Image', 'required' => false],

                'title_9' => ['type' => 'text', 'label' => '9 Title', 'required' => false],
                'image_9' => ['type' => 'text', 'label' => '9 Image', 'required' => false],

            ],

            'Technology' =>[

                'component_1' => ['type' => 'text', 'label' => '1 Component', 'required' => false],
                'technology_1' => ['type' => 'text', 'label' => '1 Technology', 'required' => false],

                'component_2' => ['type' => 'text', 'label' => '2 Component', 'required' => false],
                'technology_2' => ['type' => 'text', 'label' => '2 Technology', 'required' => false],

                'component_3' => ['type' => 'text', 'label' => '3 Component', 'required' => false],
                'technology_3' => ['type' => 'text', 'label' => '3 Technology', 'required' => false],

                'component_4' => ['type' => 'text', 'label' => '4 Component', 'required' => false],
                'technology_4' => ['type' => 'text', 'label' => '4 Technology', 'required' => false],

                'component_5' => ['type' => 'text', 'label' => '5 Component', 'required' => false],
                'technology_5' => ['type' => 'text', 'label' => '5 Technology', 'required' => false],

            ],

             'Component' =>[
                'description' => ['type' => 'text', 'label' => 'Description', 'required' => false],
             ],

              'Approach' =>[
                'description' => ['type' => 'text', 'label' => 'Description', 'required' => false],
                'lower_description' => ['type' => 'text', 'label' => 'Lower Description', 'required' => false],
             ],


            'Experience' =>[

                'label_1' => ['type' => 'text', 'label' => '1 Label', 'required' => false],
                'description_1' => ['type' => 'text', 'label' => '1 Description', 'required' => false],

                'label_2' => ['type' => 'text', 'label' => '2 Label', 'required' => false],
                'description_2' => ['type' => 'text', 'label' => '2 Description', 'required' => false],

                'label_3' => ['type' => 'text', 'label' => '3 Label', 'required' => false],
                'description_3' => ['type' => 'text', 'label' => '3 Description', 'required' => false],

                'label_4' => ['type' => 'text', 'label' => '4 Label', 'required' => false],
                'description_4' => ['type' => 'text', 'label' => '4 Description', 'required' => false],

                'label_5' => ['type' => 'text', 'label' => '5 Label', 'required' => false],
                'description_5' => ['type' => 'text', 'label' => '5 Description', 'required' => false],

                'label_6' => ['type' => 'text', 'label' => '6 Label', 'required' => false],
                'description_6' => ['type' => 'text', 'label' => '6 Description', 'required' => false],

                'label_7' => ['type' => 'text', 'label' => '7 Label', 'required' => false],
                'description_7' => ['type' => 'text', 'label' => '7 Description', 'required' => false],

                'label_8' => ['type' => 'text', 'label' => '8 Label', 'required' => false],
                'description_8' => ['type' => 'text', 'label' => '8 Description', 'required' => false],


            ],


            'conclusion' => [
                'description' => ['type' => 'text', 'label' => 'Description', 'required' => false],
            ],

            'seo' => [
                'meta_title' => ['type' => 'text', 'label' => 'Meta Title', 'required' => false],
                'meta_description' => ['type' => 'textarea', 'label' => 'Meta Description', 'required' => false],
                'keywords' => ['type' => 'text', 'label' => 'Keywords', 'required' => false],
            ]
    ];

        return Inertia::render('Case/Add', [
            'additionalDataStructure' => $additionalDataStructure,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCaselistRequest $request)
    {
         $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'status' => 'required|string|in:published,draft', // Only allow 'published' or 'draft'
            'priority' => 'required|numeric|min:0|max:100',
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors()->all();
            $errorMessage = "Validation Errors:\n";
            foreach ($errors as $index => $error) {
                $errorMessage .= ($index + 1) . ". " . $error . "\n";
            }
            session()->flash('error', $errorMessage);
            return back()->withInput(); // preserve input for user convenience
        }
         DB::beginTransaction();
        try {
            $data = $request->all();
            // Handle additional data as JSON
              if (isset($data['additional_data'])) {
                $data['data'] = $data['additional_data'];
                unset($data['additional_data']);
            }
            Caselist::create($data);
            DB::commit();
            session()->flash('message', 'Case created successfully.');
            return redirect()->route('case.index');

        } catch (\Exception $e) {
            DB::rollBack();
            session()->flash('error', 'Failed to create case: ' . $e->getMessage());
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Caselist $caselist)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
           $caselist = Caselist::findOrFail($id);

           $additionalDataStructure = [
            'Detail' => [
                'subtitle' => ['type' => 'text', 'label' => 'subtitle', 'required' => false],
                'website' => ['type' => 'text', 'label' => 'website', 'required' => false],
                'the_beginning' => ['type' => 'summernote', 'label' => 'The Beginning', 'required' => false],
                'the_beginning_image' => ['type' => 'text', 'label' => 'The Beginning Image', 'required' => false],
            ],
            'Our Work' => [
                'title' => ['type' => 'text', 'label' => 'title', 'required' => false],
                'description' => ['type' => 'summernote', 'label' => 'description', 'required' => false],
            ],




            'Service' =>[

                'title_1' => ['type' => 'text', 'label' => '1 Title', 'required' => false],
                'image_1' => ['type' => 'text', 'label' => '1 Image', 'required' => false],

                'title_2' => ['type' => 'text', 'label' => '2 Title', 'required' => false],
                'image_2' => ['type' => 'text', 'label' => '2 Image', 'required' => false],

                'title_3' => ['type' => 'text', 'label' => '3 Title', 'required' => false],
                'image_3' => ['type' => 'text', 'label' => '3 Image', 'required' => false],

                'title_4' => ['type' => 'text', 'label' => '4 Title', 'required' => false],
                'image_4' => ['type' => 'text', 'label' => '4 Image', 'required' => false],

                'title_5' => ['type' => 'text', 'label' => '5 Title', 'required' => false],
                'image_5' => ['type' => 'text', 'label' => '5 Image', 'required' => false],

                'title_6' => ['type' => 'text', 'label' => '6 Title', 'required' => false],
                'image_6' => ['type' => 'text', 'label' => '6 Image', 'required' => false],

                'title_7' => ['type' => 'text', 'label' => '7 Title', 'required' => false],
                'image_7' => ['type' => 'text', 'label' => '7 Image', 'required' => false],

                'title_8' => ['type' => 'text', 'label' => '8 Title', 'required' => false],
                'image_8' => ['type' => 'text', 'label' => '8 Image', 'required' => false],

                'title_9' => ['type' => 'text', 'label' => '9 Title', 'required' => false],
                'image_9' => ['type' => 'text', 'label' => '9 Image', 'required' => false],

            ],

            'Technology' =>[

                'component_1' => ['type' => 'text', 'label' => '1 Component', 'required' => false],
                'technology_1' => ['type' => 'text', 'label' => '1 Technology', 'required' => false],

                'component_2' => ['type' => 'text', 'label' => '2 Component', 'required' => false],
                'technology_2' => ['type' => 'text', 'label' => '2 Technology', 'required' => false],

                'component_3' => ['type' => 'text', 'label' => '3 Component', 'required' => false],
                'technology_3' => ['type' => 'text', 'label' => '3 Technology', 'required' => false],

                'component_4' => ['type' => 'text', 'label' => '4 Component', 'required' => false],
                'technology_4' => ['type' => 'text', 'label' => '4 Technology', 'required' => false],

                'component_5' => ['type' => 'text', 'label' => '5 Component', 'required' => false],
                'technology_5' => ['type' => 'text', 'label' => '5 Technology', 'required' => false],

            ],

             'Component' =>[
                'description' => ['type' => 'summernote', 'label' => 'Description', 'required' => false],
             ],

              'Approach' =>[
                'description' => ['type' => 'summernote', 'label' => 'Description', 'required' => false],
                'lower_description' => ['type' => 'summernote', 'label' => 'Lower Description', 'required' => false],
             ],


            'Experience' =>[

                'label_1' => ['type' => 'text', 'label' => '1 Label', 'required' => false],
                'description_1' => ['type' => 'summernote', 'label' => '1 Description', 'required' => false],

                'label_2' => ['type' => 'text', 'label' => '2 Label', 'required' => false],
                'description_2' => ['type' => 'summernote', 'label' => '2 Description', 'required' => false],

                'label_3' => ['type' => 'text', 'label' => '3 Label', 'required' => false],
                'description_3' => ['type' => 'summernote', 'label' => '3 Description', 'required' => false],

                'label_4' => ['type' => 'text', 'label' => '4 Label', 'required' => false],
                'description_4' => ['type' => 'summernote', 'label' => '4 Description', 'required' => false],

                'label_5' => ['type' => 'text', 'label' => '5 Label', 'required' => false],
                'description_5' => ['type' => 'summernote', 'label' => '5 Description', 'required' => false],

                'label_6' => ['type' => 'text', 'label' => '6 Label', 'required' => false],
                'description_6' => ['type' => 'summernote', 'label' => '6 Description', 'required' => false],

                'label_7' => ['type' => 'text', 'label' => '7 Label', 'required' => false],
                'description_7' => ['type' => 'summernote', 'label' => '7 Description', 'required' => false],

                'label_8' => ['type' => 'text', 'label' => '8 Label', 'required' => false],
                'description_8' => ['type' => 'summernote', 'label' => '8 Description', 'required' => false],


            ],

            'conclusion' => [
                'description' => ['type' => 'summernote', 'label' => 'Description', 'required' => false],
            ],

            'seo' => [
                'meta_title' => ['type' => 'text', 'label' => 'Meta Title', 'required' => false],
                'meta_description' => ['type' => 'textarea', 'label' => 'Meta Description', 'required' => false],
                'keywords' => ['type' => 'text', 'label' => 'Keywords', 'required' => false],
            ]
    ];

    return Inertia::render('Case/Edit', [
        'caselist' => $caselist,
        'additionalDataStructure' => $additionalDataStructure,
    ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCaselistRequest $request, $id)
    {

        $caselist = Caselist::findOrFail($id);

        DB::beginTransaction();
    try {
        $data = $request->except(['_method', '_token']);

        // Handle additional data as JSON
        if (isset($data['additional_data'])) {
            $additionalData = json_decode($data['additional_data'], true);
            if (json_last_error() === JSON_ERROR_NONE) {
                $data['data'] = json_encode($additionalData);
            } else {
                $data['data'] = $data['additional_data'];
            }
            unset($data['additional_data']);
        }

        // Remove empty values but keep 0 and false values
        $data = array_filter($data, function($value) {
            return $value !== null && $value !== '';
        });

        // Update the product
        $caselist->update($data);

        DB::commit();

        session()->flash('message', 'Case updated successfully.');
        return redirect()->route('case.index');

    } catch (\Exception $e) {
        DB::rollBack();
        session()->flash('error', 'Failed to update case: ' . $e->getMessage());
            return back()->withErrors(['error' => 'Failed to update case: ' . $e->getMessage()]);
    }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $caselist = Caselist::findOrFail($id);
          $caselist->delete();
        session()->flash('message', 'Case deleted successfully.');
        return redirect()->route('case.index');
    }

      //duplicate
    public function duplicate($id)
    {
        $caselist = Caselist::findOrFail($id);
        $newCaselist = $caselist->replicate();
        $newCaselist->slug = $caselist->slug . '-copy-' . time();
        $newCaselist->status = 'draft';
        $newCaselist->save();
        session()->flash('message', 'Case duplicated successfully.');
        return redirect()->route('case.index');
    }
}
