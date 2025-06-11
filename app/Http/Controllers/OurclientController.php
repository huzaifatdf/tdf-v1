<?php

namespace App\Http\Controllers;

use App\Models\Ourclient;
use App\Http\Requests\StoreOurclientRequest;
use App\Http\Requests\UpdateOurclientRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class OurclientController extends Controller
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

        $query = Ourclient::query();

        // Apply sorting
        if (!empty($sort['key']) && !empty($sort['order'])) {
            $query->orderBy($sort['key'], $sort['order']);
        }

        // Apply filters
        if (!empty($filters['name'])) {
            $query->where('name', 'like', '%'.$filters['name'].'%');
        }

        $ourclients = $query->paginate($perPage);

        return Inertia::render('Ourclient/List', [
            'ourclients' => $ourclients,
            'filters' => $filters,
            'sort' => $sort,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
          return Inertia::render('Ourclient/Add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOurclientRequest $request)
    {
          $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
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
            Ourclient::create($data);
            DB::commit();
            session()->flash('message', 'Client created successfully.');
            return redirect()->route('ourclient.index');

        } catch (\Exception $e) {
            DB::rollBack();
            session()->flash('error', 'Failed to create ourclient: ' . $e->getMessage());
            return back();
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Ourclient $ourclient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Ourclient $ourclient)
    {
        return Inertia::render('Ourclient/Edit', [
            'ourclient' => $ourclient,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOurclientRequest $request, Ourclient $ourclient)
    {
         DB::beginTransaction();
    try {
        $data = $request->except(['_method', '_token']);

        // Remove empty values but keep 0 and false values
        $data = array_filter($data, function($value) {
            return $value !== null && $value !== '';
        });

        // Update the product
        $ourclient->update($data);

        DB::commit();

        session()->flash('message', 'Client updated successfully.');
        return redirect()->route('ourclient.index');

    } catch (\Exception $e) {
        DB::rollBack();
        session()->flash('error', 'Failed to update ourclient: ' . $e->getMessage());
            return back()->withErrors(['error' => 'Failed to update ourclient: ' . $e->getMessage()]);
    }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ourclient $ourclient)
    {
        $ourclient->delete();
        session()->flash('message', 'Client deleted successfully.');
        return redirect()->route('ourclient.index');
    }
}
