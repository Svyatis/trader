<?php

use Illuminate\Http\Request;

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

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::get('/products', 'ProductsController@index');
Route::get('/get_product/{id}', 'ProductsController@getProduct');
Route::get('/get_image/{id}', 'ProductsController@getImage');
Route::post('/save_product', 'ProductsController@store');
Route::post('/update_product/{id}', 'ProductsController@update');
Route::get('/delete_product/{id}', 'ProductsController@destroy');
