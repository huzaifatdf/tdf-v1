<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
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

        $query = Product::query();

        // Apply sorting
        if (!empty($sort['key']) && !empty($sort['order'])) {
            $query->orderBy($sort['key'], $sort['order']);
        }

        // Apply filters
        if (!empty($filters['title'])) {
            $query->where('title', 'like', '%'.$filters['title'].'%');
        }

        $products = $query->paginate($perPage);

        return Inertia::render('Product/List', [
            'products' => $products,
            'filters' => $filters,
            'sort' => $sort,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $additionalDataStructure = [
            'Detail' => [
                'detail_overview' => ['type' => 'text', 'label' => 'Detail Overview', 'required' => false],

            ],

            'Problem' => [
                'problem' => ['type' => 'text', 'label' => 'Problem Label', 'required' => false],
                'problem_description' => ['type' => 'text', 'label' => 'Problem Description', 'required' => false],
            ],

            'problem Solutions' =>[
                'problem_label_1' => ['type' => 'text', 'label' => 'Problem 1 Label', 'required' => false],
                'problem_description_1' => ['type' => 'text', 'label' => 'Problem 1 Description', 'required' => false],
                'problem_label_2' => ['type' => 'text', 'label' => 'Problem 2 Label', 'required' => false],
                'problem_description_2' => ['type' => 'text', 'label' => 'Problem 2 Description', 'required' => false],
                'problem_label_3' => ['type' => 'text', 'label' => 'Problem 3 Label', 'required' => false],
                'problem_description_3' => ['type' => 'text', 'label' => 'Problem 3 Description', 'required' => false],
                'problem_label_4' => ['type' => 'text', 'label' => 'Problem 4 Label', 'required' => false],
                'problem_description_4' => ['type' => 'text', 'label' => 'Problem 4 Description', 'required' => false],
                'problem_label_5' => ['type' => 'text', 'label' => 'Problem 5 Label', 'required' => false],
                'problem_description_5' => ['type' => 'text', 'label' => 'Problem 5 Description', 'required' => false],
                'problem_label_6' => ['type' => 'text', 'label' => 'Problem 6 Label', 'required' => false],
                'problem_description_6' => ['type' => 'text', 'label' => 'Problem 6 Description', 'required' => false],
                'problem_label_7' => ['type' => 'text', 'label' => 'Problem 7 Label', 'required' => false],
                'problem_description_7' => ['type' => 'text', 'label' => 'Problem 7 Description', 'required' => false],
                'problem_label_8' => ['type' => 'text', 'label' => 'Problem 8 Label', 'required' => false],
                'problem_description_8' => ['type' => 'text', 'label' => 'Problem 8 Description', 'required' => false],
                'problem_label_9' => ['type' => 'text', 'label' => 'Problem 9 Label', 'required' => false],
                'problem_description_9' => ['type' => 'text', 'label' => 'Problem 9 Description', 'required' => false],
                'problem_label_10' => ['type' => 'text', 'label' => 'Problem 10 Label', 'required' => false],
                'problem_description_10' => ['type' => 'text', 'label' => 'Problem 10 Description', 'required' => false],
            ],

            'seo' => [
                'meta_title' => ['type' => 'text', 'label' => 'Meta Title', 'required' => false],
                'meta_description' => ['type' => 'textarea', 'label' => 'Meta Description', 'required' => false],
                'keywords' => ['type' => 'text', 'label' => 'Keywords', 'required' => false],
            ]
        ];
        return Inertia::render('Product/Add', [
            'additionalDataStructure' => $additionalDataStructure,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
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
            // Generate slug from title
            $data['slug'] = Str::slug($data['title']);
            // Handle additional data as JSON
              if (isset($data['additional_data'])) {
                $data['data'] = $data['additional_data'];
                unset($data['additional_data']);
            }
            Product::create($data);
            DB::commit();
            session()->flash('message', 'Product created successfully.');
            return redirect()->route('product.index');

        } catch (\Exception $e) {
            DB::rollBack();
            session()->flash('error', 'Failed to create product: ' . $e->getMessage());
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
public function edit(Product $product)
{
    $additionalDataStructure = [
         'Detail' => [
                'detail_overview' => ['type' => 'text', 'label' => 'Detail Overview', 'required' => false],

            ],

            'Problem' => [
                'problem' => ['type' => 'text', 'label' => 'Problem Label', 'required' => false],
                'problem_description' => ['type' => 'text', 'label' => 'Problem Description', 'required' => false],
            ],

            'problem Solutions' =>[
                'problem_label_1' => ['type' => 'text', 'label' => 'Problem 1 Label', 'required' => false],
                'problem_description_1' => ['type' => 'text', 'label' => 'Problem 1 Description', 'required' => false],
                'problem_label_2' => ['type' => 'text', 'label' => 'Problem 2 Label', 'required' => false],
                'problem_description_2' => ['type' => 'text', 'label' => 'Problem 2 Description', 'required' => false],
                'problem_label_3' => ['type' => 'text', 'label' => 'Problem 3 Label', 'required' => false],
                'problem_description_3' => ['type' => 'text', 'label' => 'Problem 3 Description', 'required' => false],
                'problem_label_4' => ['type' => 'text', 'label' => 'Problem 4 Label', 'required' => false],
                'problem_description_4' => ['type' => 'text', 'label' => 'Problem 4 Description', 'required' => false],
                'problem_label_5' => ['type' => 'text', 'label' => 'Problem 5 Label', 'required' => false],
                'problem_description_5' => ['type' => 'text', 'label' => 'Problem 5 Description', 'required' => false],
                'problem_label_6' => ['type' => 'text', 'label' => 'Problem 6 Label', 'required' => false],
                'problem_description_6' => ['type' => 'text', 'label' => 'Problem 6 Description', 'required' => false],
                'problem_label_7' => ['type' => 'text', 'label' => 'Problem 7 Label', 'required' => false],
                'problem_description_7' => ['type' => 'text', 'label' => 'Problem 7 Description', 'required' => false],
                'problem_label_8' => ['type' => 'text', 'label' => 'Problem 8 Label', 'required' => false],
                'problem_description_8' => ['type' => 'text', 'label' => 'Problem 8 Description', 'required' => false],
                'problem_label_9' => ['type' => 'text', 'label' => 'Problem 9 Label', 'required' => false],
                'problem_description_9' => ['type' => 'text', 'label' => 'Problem 9 Description', 'required' => false],
                'problem_label_10' => ['type' => 'text', 'label' => 'Problem 10 Label', 'required' => false],
                'problem_description_10' => ['type' => 'text', 'label' => 'Problem 10 Description', 'required' => false],
            ],
        'seo' => [
            'meta_title' => ['type' => 'text', 'label' => 'Meta Title', 'required' => false],
            'meta_description' => ['type' => 'textarea', 'label' => 'Meta Description', 'required' => false],
            'keywords' => ['type' => 'text', 'label' => 'Keywords', 'required' => false],
        ]
    ];

    return Inertia::render('Product/Edit', [
        'product' => $product,
        'additionalDataStructure' => $additionalDataStructure,
    ]);
}

/**
 * Update the specified resource in storage.
 */
public function update(UpdateProductRequest $request, Product $product)
{
    DB::beginTransaction();
    try {
        $data = $request->except(['_method', '_token']);

        // Update slug if title changed
        if (isset($data['title']) && $data['title'] !== $product->title) {
            $data['slug'] = Str::slug($data['title']);
        }

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
        $product->update($data);

        DB::commit();

        session()->flash('message', 'Product updated successfully.');
        return redirect()->route('product.index');

    } catch (\Exception $e) {
        DB::rollBack();
        session()->flash('error', 'Failed to update product: ' . $e->getMessage());
            return back()->withErrors(['error' => 'Failed to update product: ' . $e->getMessage()]);
    }
}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        session()->flash('message', 'Product deleted successfully.');
        return redirect()->route('product.index');
    }
}
