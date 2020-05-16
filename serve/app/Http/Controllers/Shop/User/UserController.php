<?php

namespace App\Http\Controllers\Shop\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Shop\User\UserEditRequest;
use App\Http\Requests\Shop\User\UserLoginRequest;
use App\Http\Requests\Shop\User\UserRegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:users',['except'=>['register','login']]);
    }

    public function register(UserRegisterRequest $request)
    {
        $user = User::create([
            'mobile'=>$request->get('mobile'),
            "password"=>Hash::make($request->get('password'))
        ]);
        if($user){
            return $this->jsonSuccessResponse($this->respondWithToken(auth('users')->login($user)),"注册成功");
        }else{
            return $this->jsonErrorResponse(401,"创建失败");
        }
    }

    public function login(UserLoginRequest $request)
    {
        $credentials = \request(['mobile','password']);
        if (!$token = auth('users')->attempt($credentials)) {
            return $this->jsonErrorResponse(401,"用户认证失败（如：密码错误）");
        }
        return $this->jsonSuccessResponse($this->respondWithToken($token));
    }

    public function edit(UserEditRequest $request)
    {
        $user = auth('users')->user();
        $user['password'] = Hash::make($request->get('password'));
        $user->save();
        return $this->jsonSuccessResponse($this->respondWithToken(auth('users')->refresh()),"更新成功");
    }

    public function logout()
    {
        auth('users')->logout();
        return $this->jsonSuccessResponse(null,"成功登出");
    }

    public function refresh()
    {
        return $this->jsonSuccessResponse($this->respondWithToken(auth('users')->refresh()));
    }

    public function info()
    {
        return $this->jsonSuccessResponse(auth('users')->user());
    }

    public function respondWithToken($token)
    {
        return [
            'access_token' => $token,
            'token_type' => 'Bearer',
            'expires_in' => auth('users')->factory()->getTTL() * 60,
        ];
    }
}
