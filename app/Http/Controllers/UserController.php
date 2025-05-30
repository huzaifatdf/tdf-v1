<?php

namespace App\Http\Controllers;

use App\Models\User;
use Dotenv\Validator;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator as ValidatorFacade;
use Illuminate\Support\Facades\Session;


class UserController extends Controller
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

        $query = User::query();

        // Apply sorting
        if (!empty($sort['key']) && !empty($sort['order'])) {
            $query->orderBy($sort['key'], $sort['order']);
        }

        // Apply filters
        if (!empty($filters['email'])) {
            $query->where('email', 'like', '%'.$filters['email'].'%');
        }

        $users = $query->paginate($perPage);

        return Inertia::render('User/List', [
            'users' => $users,
            'filters' => $filters,
            'sort' => $sort,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       $roles = \Spatie\Permission\Models\Role::where('name', '!=', 'superadmin')
            ->get();
        return Inertia::render('User/Add', [
            'roles' => $roles,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = ValidatorFacade::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
            'role' => 'required|string|exists:roles,name',
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors()->all();
            $errorMessage = "Validation Errors:\n";

            foreach ($errors as $index => $error) {
                $errorMessage .= ($index + 1) . ". " . $error . "\n";
            }
            Session::flash('error', $errorMessage);
            return back();
        }
        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);
        // Assign role to user
        $user->assignRole($request->input('role'));
        Session::flash('success', 'User created successfully!');
        return redirect()->route('user.index');

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::findOrFail($id);
        $roles = \Spatie\Permission\Models\Role::where('name', '!=', 'superadmin')
            ->get();
        return Inertia::render('User/Edit', [
            'user' => $user,
            'roles' => $roles,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
         $validator = ValidatorFacade::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email,'.$id,
            'role' => 'required|string|exists:roles,name',
        ]);
        if ($validator->fails()) {
             $errors = $validator->errors()->all();
            $errorMessage = "Validation Errors:\n";

            foreach ($errors as $index => $error) {
                $errorMessage .= ($index + 1) . ". " . $error . "\n";
            }

            Session::flash('error', $errorMessage);
            return back();
        }
        $user = User::findOrFail($id);
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        // Update role if provided
        if ($request->has('role')) {
            // Remove all roles first
            $user->syncRoles([]);
            // Assign new role
            $user->assignRole($request->input('role'));
        }
        $user->save();
        Session::flash('success', 'User updated successfully!');
        return redirect()->route('user.index');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::findOrFail($id);
        //if superadmin, prevent deletion
        if ($user->hasRole('superadmin')) {
            Session::flash('error', 'Cannot delete superadmin user.');
            return redirect()->route('user.index');
        }
        $user->delete();
         Session::flash('success', 'User deleted successfully.');
        return redirect()->route('user.index');

    }
}
