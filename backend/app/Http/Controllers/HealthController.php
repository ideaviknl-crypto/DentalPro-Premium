<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HealthController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
        return response()->json([
            'status' => 'ok',
            'service' => 'DentalPro Premium API',
            'timestamp' => now()->toIso8601String(),
        ]);
    }
}
