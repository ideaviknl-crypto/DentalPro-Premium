<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'name' => 'DentalPro Premium',
        'status' => 'online',
        'message' => 'Welcome to the DentalPro Premium API.',
    ]);
});
