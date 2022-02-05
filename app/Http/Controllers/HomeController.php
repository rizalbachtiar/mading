<?php

namespace App\Http\Controllers;

use App\Models\Magazine;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'magazines' => Magazine::get(),
            'categories' => Category::get(),
            'user' => auth()->user()->role,
        ]);
    }

    public function detailMagazine(Magazine $magazine)
    {
        return Inertia::render('DetailMagazine', [
            'magazine' => $magazine,
            'pages' => $magazine->pages
        ]);
    }

    public function detailContent()
    {
        return Inertia::render('DetailContent');
    }
}
