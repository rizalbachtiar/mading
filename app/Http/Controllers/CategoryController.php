<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('CategoryIndex', [
            'categories' => Category::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('CategoryCreate');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $image = NULL;

        if ($request->hasFile('image_url'))
        {
            $file = $request->file('image_url');
            $image = $request->name . '-' . time() . '.' . $file->getClientOriginalExtension();
            $file->storeAs('public/categories', $image);
        }

        Category::create([
            'name' => $request->name,
            'image_url' => $image
        ]);

        return redirect()->route('categories.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        return Inertia::render('CategoryEdit', [
            'category' => $category
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $image = $category->image_url;

        if ($request->hasFile('image_url')) 
        {
            $file = $request->file('image_url');
            File::delete(storage_path('app/public/categories/' . $image));
            $image = $request->name . '-' . time() . '.' . $file->getClientOriginalExtension();
            $file->storeAs('public/categories', $image);
        }

        $category->fill([
            'name' => $request->name,
            'image_url' => $image
        ]);
        $category->save();

        return redirect()->route('categories.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return redirect()->route('categories.index');
    }
}
