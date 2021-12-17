<?php

namespace App\Http\Controllers;

use App\Models\Magazine;
use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\Exceptions\PostTooLargeException;
use File;

class MagazineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('MagazineIndex', [
            'magazines' => Magazine::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('MagazineCreate');
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
            $file->storeAs('public/magazines', $image);
        }
        Magazine::create([
            'name' => $request->name,
            'image_url' => $image
        ]);
        return redirect()->route('magazines.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Magazine  $magazine
     * @return \Illuminate\Http\Response
     */
    public function show(Magazine $magazine)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Magazine  $magazine
     * @return \Illuminate\Http\Response
     */
    public function edit(Magazine $magazine)
    {
        return Inertia::render('MagazineEdit', [
            'magazine' => $magazine
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Magazine  $magazine
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Magazine $magazine)
    {
        $image = $magazine->image_url;
        if ($request->hasFile('image_url'))
        {
            $file = $request->file('image_url');
            File::delete(storage_path('app/public/magazines/' . $image));
            $image = $request->name . '-' . time() . '.' . $file->getClientOriginalExtension();
            $file->storeAs('public/magazines', $image);

        }
        $magazine->fill([
            'name' => $request->name,
            'image_url' => $image
        ]);
        $magazine->save();
        return redirect()->route('magazines.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Magazine  $magazine
     * @return \Illuminate\Http\Response
     */
    public function destroy(Magazine $magazine)
    {
        //
    }

    public function savePage(Request $request)
    {
        Page::create([
            'name' => $request->name,
            'content' => $request->content,
            'magazine_id' => $request->magazine_id
        ]);
        return redirect()->back();
    }
}
