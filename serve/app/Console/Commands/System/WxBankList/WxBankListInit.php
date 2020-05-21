<?php

namespace App\Console\Commands\System\WxBankList;

use App\Models\SysAccountWay;
use App\Models\SysWxBankList;
use Illuminate\Console\Command;

class WxBankListInit extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'system:wx_bank_init';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
//        $banklists = [
//            ['open_bank_code'=>"0100","bank"=>"中国邮政储蓄银行"],
//            ['open_bank_code'=>"0102","bank"=>"工商银行"],
//            ['open_bank_code'=>"0103","bank"=>"农业银行"],
//            ['open_bank_code'=>"0104","bank"=>"中国银行"],
//            ['open_bank_code'=>"0105","bank"=>"建设银行"],
//            ['open_bank_code'=>"0301","bank"=>"交通银行"],
//            ['open_bank_code'=>"0302","bank"=>"中信银行"],
//            ['open_bank_code'=>"0303","bank"=>"光大银行"],
//            ['open_bank_code'=>"0304","bank"=>"华夏银行"],
//            ['open_bank_code'=>"0305","bank"=>"民生银行"],
//            ['open_bank_code'=>"0306","bank"=>"广发银行"],
//            ['open_bank_code'=>"0308","bank"=>"招商银行"],
//            ['open_bank_code'=>"0309","bank"=>"兴业银行"],
//            ['open_bank_code'=>"0310","bank"=>"浦发银行"],
//            ['open_bank_code'=>"0318","bank"=>"平安银行"],
//            ['open_bank_code'=>"0403","bank"=>"北京银行"],
//            ['open_bank_code'=>"0408","bank"=>"宁波银行"],
//        ];
//        SysWxBankList::insert($banklists);
        $way_lists = [
            ['way'=>'alipay',"title"=>"支付宝","fee"=>0,"fee_min"=>0,"fee_max"=>0,"daily_limit"=>10000],
            ['way'=>'wxpay',"title"=>"微信零钱","fee"=>0,"fee_min"=>0,"fee_max"=>0,"daily_limit"=>10000,"active"=>0],
            ['way'=>'bank',"title"=>"银行卡","fee"=>0.1,"fee_min"=>1,"fee_max"=>25,"daily_limit"=>10000],
        ];
        SysAccountWay::insert($way_lists);
        $this->info('初始化成功');
    }
}
