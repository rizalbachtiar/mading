<?php

namespace App\Http\Controllers;

use App\Models\Magazine;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\Exceptions\PostTooLargeException;

class MagazineController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // dd(Magazine::get());
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
            // dd($image);
            $file->storeAs('public/magazines', $image);
        }
        // dd($request->all());
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
        $magazine->fill($request->all());
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
}
