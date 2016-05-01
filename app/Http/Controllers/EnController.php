<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class EnController extends Controller
{
    public function getCode()
    {
        return response()->json(['code' => 'nfonaqmvnhynonvfhaxvnv']);
    }
}
