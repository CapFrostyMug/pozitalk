<?php

use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'index']);

Route::get('/psy', [HomeController::class, 'psy']);

Route::get('/lk', [HomeController::class, 'lk']);

Route::get('/gift', [HomeController::class, 'gift']);

Route::get('/tests', [HomeController::class, 'tests']);

Route::get('/tests/test', [HomeController::class, 'testsTest'])->name('tests.test');

Route::get('/knowledge', [HomeController::class, 'knowledge']);



