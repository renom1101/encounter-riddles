<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests;
use App\User;

class Authenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        $password = $request->header('auth-password');

        if (strlen($password) < 8) {
            return response()->json(['status' => 'FAIL1']);
        }

        if (!preg_match("#[0-9]+#", $password)) {
            return response()->json(['status' => 'FAIL2']);
        }

        if (!preg_match("#[a-zA-Z]+#", $password)) {
            return response()->json(['status' => 'FAIL3']);
        }

        if (!preg_match('/[\'\/~`\!@#\$%\^&\*\(\)_\-\+=\{\}\[\]\|;:"\<\>,\.\?\\\]/', $password)) {
            return response()->json(['status' => 'FAIL4']);
        }

        return $next($request);
    }
}
