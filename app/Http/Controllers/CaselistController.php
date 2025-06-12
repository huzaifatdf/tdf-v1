<?php

namespace App\Http\Controllers;

use App\Models\Caselist;
use App\Http\Requests\StoreCaselistRequest;
use App\Http\Requests\UpdateCaselistRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use DB;


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
                'detail_overview' => ['type' => 'text', 'label' => 'Detail Overview', 'required' => false],

            ],

             'Our Work' => [
                'title' => ['type' => 'text', 'label' => 'title', 'required' => false],
                'description' => ['type' => 'text', 'label' => 'description', 'required' => false],
            ],

            'Problem' => [
                'problem' => ['type' => 'text', 'label' => 'Problem Label', 'required' => false],
                'problem_description' => ['type' => 'text', 'label' => 'Problem Description', 'required' => false],
            ],

            'problem Solutions' =>[

                'label_1' => ['type' => 'text', 'label' => '1 Label', 'required' => false],
                'title_1' => ['type' => 'text', 'label' => '1 Title', 'required' => false],
                'description_1' => ['type' => 'text', 'label' => '1 Description', 'required' => false],

                'label_2' => ['type' => 'text', 'label' => '2 Label', 'required' => false],
                'title_2' => ['type' => 'text', 'label' => '2 Title', 'required' => false],
                'description_2' => ['type' => 'text', 'label' => '2 Description', 'required' => false],

                'label_3' => ['type' => 'text', 'label' => '3 Label', 'required' => false],
                'title_3' => ['type' => 'text', 'label' => '3 Title', 'required' => false],
                'description_3' => ['type' => 'text', 'label' => '3 Description', 'required' => false],

                'label_4' => ['type' => 'text', 'label' => '4 Label', 'required' => false],
                'title_4' => ['type' => 'text', 'label' => '4 Title', 'required' => false],
                'description_4' => ['type' => 'text', 'label' => '4 Description', 'required' => false],

                'label_5' => ['type' => 'text', 'label' => '5 Label', 'required' => false],
                'title_5' => ['type' => 'text', 'label' => '5 Title', 'required' => false],
                'description_5' => ['type' => 'text', 'label' => '5 Description', 'required' => false],

                'label_6' => ['type' => 'text', 'label' => '6 Label', 'required' => false],
                'title_6' => ['type' => 'text', 'label' => '6 Title', 'required' => false],
                'description_6' => ['type' => 'text', 'label' => '6 Description', 'required' => false],

                'label_7' => ['type' => 'text', 'label' => '7 Label', 'required' => false],
                'title_7' => ['type' => 'text', 'label' => '7 Title', 'required' => false],
                'description_7' => ['type' => 'text', 'label' => '7 Description', 'required' => false],

                'label_8' => ['type' => 'text', 'label' => '8 Label', 'required' => false],
                'title_8' => ['type' => 'text', 'label' => '8 Title', 'required' => false],
                'description_8' => ['type' => 'text', 'label' => '8 Description', 'required' => false],

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
    public function edit(Caselist $caselist)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCaselistRequest $request, Caselist $caselist)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Caselist $caselist)
    {
        //
    }
}
