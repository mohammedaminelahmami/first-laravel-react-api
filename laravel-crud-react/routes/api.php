<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/', [ProductController::class, 'index']);
Route::get('/get', [ProductController::class, 'get']);
Route::post('/store', [ProductController::class, 'store']);
Route::put('/update/{productName}', [ProductController::class, 'update']);
Route::delete('/delete/{productName}', [ProductController::class, 'destroy']);