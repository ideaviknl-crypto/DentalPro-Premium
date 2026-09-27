<?php

use Illuminate\Support\Facades\Route;

Route::get('/health', [App\Http\Controllers\HealthController::class, 'index']);
Route::get('/services', [App\Http\Controllers\ClinicController::class, 'services']);
Route::get('/doctors', [App\Http\Controllers\ClinicController::class, 'doctors']);
Route::get('/testimonials', [App\Http\Controllers\ClinicController::class, 'testimonials']);
Route::post('/bookings', [App\Http\Controllers\ClinicController::class, 'storeBooking']);
