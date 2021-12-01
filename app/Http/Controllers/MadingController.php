<?php

namespace App\Http\Controllers;

use App\Models\Mading;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MadingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('MadingIndex', [
            'madings' => Mading::get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('MadingCreate');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Mading::create($request->all());
        return redirect()->route('madings.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Mading  $mading
     * @return \Illuminate\Http\Response
     */
    public function show(Mading $mading)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Mading  $mading
     * @return \Illuminate\Http\Response
     */
    public function edit(Mading $mading)
    {
        return Inertia::render('MadingEdit', [
            'mading' => $mading
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Mading  $mading
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Mading $mading)
    {
        $mading->fill($request->all());
        $mading->save();
        return redirect()->route('madings.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Mading  $mading
     * @return \Illuminate\Http\Response
     */
    public function destroy(Mading $mading)
    {
        //
    }
}
