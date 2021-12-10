<?php

use App\Http\Controllers\MadingController;
use App\Http\Controllers\MagazineController;
use App\Http\Controllers\HomeController;
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

Route::get('/home', [HomeController::class, 'index'])->name('home.index');

Route::get('/login', function () {
    return Inertia::render('Login');
});

Route::get('/detailmading', function () {
    return Inertia::render('DetailMading');
});

Route::resource('madings', MadingController::class);
Route::resource('magazines', MagazineController::class);
Route::post('/magazines/{magazine}/update-attachment',[MagazineController::class, 'update'])->name('magazines.update-attachment');