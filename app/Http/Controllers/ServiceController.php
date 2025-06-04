<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Http\Requests\StoreServiceRequest;
use App\Http\Requests\UpdateServiceRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ServiceController extends Controller
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

        $query = Service::query();

        // Apply sorting
        if (!empty($sort['key']) && !empty($sort['order'])) {
            $query->orderBy($sort['key'], $sort['order']);
        }

        // Apply filters
        if (!empty($filters['title'])) {
            $query->where('title', 'like', '%'.$filters['title'].'%');
        }

        $services = $query->paginate($perPage);

        return Inertia::render('Service/List', [
            'services' => $services,
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
        return Inertia::render('Service/Add', [
            'additionalDataStructure' => $additionalDataStructure,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreServiceRequest $request)
    {
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
            Service::create($data);

            DB::commit();

            session()->flash('message', 'Service created successfully.');
            return redirect()->route('service.index');

        } catch (\Exception $e) {
            DB::rollBack();
            session()->flash('error', 'Failed to create service: ' . $e->getMessage());
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Service $service)
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

    return Inertia::render('Service/Edit', [
        'service' => $service,
        'additionalDataStructure' => $additionalDataStructure,
    ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateServiceRequest $request, Service $service)
    {
         DB::beginTransaction();
    try {
        $data = $request->except(['_method', '_token']);

        // Update slug if title changed
        if (isset($data['title']) && $data['title'] !== $service->title) {
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
        $service->update($data);

        DB::commit();

        session()->flash('message', 'Service updated successfully.');
        return redirect()->route('service.index');

    } catch (\Exception $e) {
        DB::rollBack();
        \Log::error('Service update failed: ' . $e->getMessage());
        session()->flash('error', 'Failed to update service: ' . $e->getMessage());

        return back()->withErrors(['error' => 'Failed to update service: ' . $e->getMessage()]);
    }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        $service->delete();
        session()->flash('message', 'Service deleted successfully.');
        return redirect()->route('service.index');
    }
}
