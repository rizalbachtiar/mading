<?php

use App\Http\Controllers\MadingController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Login');
});

Route::get('/home', function () {
    return Inertia::render('Home', [
        'madings' => [
            asset('/images/kategori/guru_lanscape.png'),
            asset('/images/kategori/guru_lanscape.png')   
        ]
    ]);
});

Route::get('/login', function () {
    return Inertia::render('Login');
});

Route::get('/detailmading', function () {
    return Inertia::render('DetailMading');
});

Route::resource('madings', MadingController::class);