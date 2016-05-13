<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Mockery\CountValidator\Exception;

class AuthenticationController extends Controller
{
    public function users($id = null)
    {
    	if ($id == null) {
    		$data = User::all(array('id', 'name', 'email'));
    	} 
    	else {
    		$data = User::find($id, array('id', 'name', 'email'));
    	}

    	return $data;
    }

    public function login(Request $request)
    {
        $password = $request->input('password');

        if (strlen($password) < 8) {
            throw new Exception('FAIL');
        }

        if (!preg_match("#[0-9]+#", $password)) {
            throw new Exception('FAIL');
        }

        if (!preg_match("#[a-zA-Z]+#", $password)) {
            throw new Exception('FAIL');
        }

        if (!preg_match('/[\'\/~`\!@#\$%\^&\*\(\)_\-\+=\{\}\[\]\|;:"\<\>,\.\?\\\]/', $password)) {
            throw new Exception('FAIL');
        }

        return response()->json(['status' => 'OK']);
    }
}
