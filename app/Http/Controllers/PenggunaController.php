<?php

namespace App\Http\Controllers;

use App\Models\Pengguna;
use Illuminate\Http\Request;

class PenggunaController extends Controller
{
     public function getIndex()
    {
        return Inertia::render('Home', [
            'pengguna' => Pengguna::get()
        ]);
    }
    public function getGuruIndex()
    {
        $pengguna  = auth()->user()->pengguna;
        return Inertia::render('guru.Home', [
            'pengguna' => Pengguna::get()
        ]);
    }
    public function getMuridIndex()
    {
       return Inertia::render('murid.Home', [
            'pengguna' => Pengguna::get()
        ]);
    }
}
