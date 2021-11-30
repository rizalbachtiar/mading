<?php

namespace App\Http\Controllers;

use App\Models\Mading;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'datas' => Mading::get()
        ]);
    }
}
