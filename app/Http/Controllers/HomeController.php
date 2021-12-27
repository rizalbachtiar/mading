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
            'categories' => Category::get()
        ]);
    }

    public function detailMagazine(Magazine $magazine)
    {
        // dd($magazine->pages);
        return Inertia::render('DetailMagazine', [
            'magazine' => $magazine,
            'pages' => $magazine->pages
        ]);
    }
}
