<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin',
            'role' => 'admin',
            'password' => Hash::make('123'),
        ]);
          DB::table('users')->insert([
            'name' => 'siswa',
            'email' => 'siswa',
            'role' => 'siswa',
            'password' => Hash::make('12345'),
        ]);
    }
}
