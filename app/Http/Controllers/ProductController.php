<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

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
            'specifications' => [
                'weight' => ['type' => 'number', 'label' => 'Weight (kg)', 'required' => false],
                'dimensions' => ['type' => 'text', 'label' => 'Dimensions (L x W x H)', 'required' => false],
                'color' => ['type' => 'text', 'label' => 'Color', 'required' => false],
                'material' => ['type' => 'text', 'label' => 'Material', 'required' => false],
            ],
            'pricing' => [
                'cost_price' => ['type' => 'number', 'label' => 'Cost Price', 'required' => false],
                'selling_price' => ['type' => 'number', 'label' => 'Selling Price', 'required' => false],
                'discount_percentage' => ['type' => 'number', 'label' => 'Discount %', 'required' => false],
            ],
            'inventory' => [
                'sku' => ['type' => 'text', 'label' => 'SKU', 'required' => false],
                'stock_quantity' => ['type' => 'number', 'label' => 'Stock Quantity', 'required' => false],
                'reorder_level' => ['type' => 'number', 'label' => 'Reorder Level', 'required' => false],
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
         DB::beginTransaction();

        try {
            $data = $request->all();

            // Generate slug from title
            $data['slug'] = Str::slug($data['title']);

            // Handle image upload


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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
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
