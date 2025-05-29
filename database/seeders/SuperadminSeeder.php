<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SuperadminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \Spatie\Permission\Models\Role::firstOrCreate(['name' => 'superadmin'], [
            'guard_name' => 'web',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        // Create a superadmin user
        $superadmin = \App\Models\User::firstOrCreate(
            ['email' => 'superadmin@yopmail.com'],
            [
                'name' => 'Super Admin',
                'password' => bcrypt('superadmin@yopmail.com'),
                'created_at' => now(),
                'updated_at' => now(),
            ]
        );
        // Assign the superadmin role to the user
        $superadmin->assignRole('superadmin');



    }
}
