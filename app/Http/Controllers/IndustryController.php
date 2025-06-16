<?php

namespace App\Http\Controllers;

use App\Models\Industry;
use App\Http\Requests\StoreIndustryRequest;
use App\Http\Requests\UpdateIndustryRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;


class IndustryController extends Controller
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

        $query = Industry::query();

        // Apply sorting
        if (!empty($sort['key']) && !empty($sort['order'])) {
            $query->orderBy($sort['key'], $sort['order']);
        }

        // Apply filters
        if (!empty($filters['title'])) {
            $query->where('title', 'like', '%'.$filters['title'].'%');
        }

        $industries = $query->paginate($perPage);

        return Inertia::render('Industry/List', [
            'industries' => $industries,
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

             'Our Work' => [
                'title' => ['type' => 'text', 'label' => 'title', 'required' => false],
                'description' => ['type' => 'text', 'label' => 'description', 'required' => false],
            ],

            'seo' => [
                'meta_title' => ['type' => 'text', 'label' => 'Meta Title', 'required' => false],
                'meta_description' => ['type' => 'textarea', 'label' => 'Meta Description', 'required' => false],
                'keywords' => ['type' => 'text', 'label' => 'Keywords', 'required' => false],
            ]
        ];
        return Inertia::render('Industry/Add', [
            'additionalDataStructure' => $additionalDataStructure,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreIndustryRequest $request)
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
            Industry::create($data);
            DB::commit();
            session()->flash('message', 'Industry created successfully.');
            return redirect()->route('industry.index');

        } catch (\Exception $e) {
            DB::rollBack();
            session()->flash('error', 'Failed to create industry: ' . $e->getMessage());
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Industry $industry)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Industry $industry)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateIndustryRequest $request, Industry $industry)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Industry $industry)
    {
        //
    }
}
