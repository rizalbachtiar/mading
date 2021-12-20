<?php

use App\Http\Controllers\MagazineController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\LoginController;



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

Route::post('/login',[LoginController::class, 'authenticate'])->name('login');
Route::get('/home', [HomeController::class, 'index'])->name('home.index');

Route::get('/login', function () {
    return Inertia::render('Login');
});

Route::get('/detailmading', function () {
    return Inertia::render('DetailMading');
});

Route::resource('magazines', MagazineController::class);
Route::post('/magazines/{magazine}/update-attachment',[MagazineController::class, 'update'])->name('magazines.update-attachment');
Route::post('/magazines-page/create-page',[MagazineController::class, 'savePage'])->name('magazines.create-page');
Route::post('/magazines-page/{page}/update-page',[MagazineController::class, 'updatePage'])->name('magazines.update-page');
Route::delete('/magazines-page/{page}',[MagazineController::class, 'destroyPage'])->name('magazines.delete-page');

Route::resource('categories', CategoryController::class);
Route::post('/categories/{category}/update-attachment',[CategoryController::class, 'update'])->name('categories.update-attachment');