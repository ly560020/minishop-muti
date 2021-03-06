<?php

namespace App\Http\Controllers;

use App\Events\Shop\Sms\SmsAmountEvent;
use App\Events\Shop\Sms\SmsSendEvent;
use App\Http\Response\jsonResponse;
use App\Models\AdminTemplate;
use App\Models\Shop;
use App\Models\SysHomeSetting;
use App\Models\SysSmsTemplate;
use App\Services\PingXX\PingXX;
use App\Services\YuanPian\SmsService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Config;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests, jsonResponse;

    public function home_template()
    {
        $template = AdminTemplate::where('code', 'template')->first();
        return $template['setting'];
    }

    public function home_config()
    {
        return SysHomeSetting::first();
    }

    public function test_sms(Request $request)
    {
        return redirect("http://baidu.com",302);
    }


}
