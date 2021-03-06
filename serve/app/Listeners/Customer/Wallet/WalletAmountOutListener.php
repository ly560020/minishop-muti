<?php

namespace App\Listeners\Customer\Wallet;

use App\Events\Customer\Wallet\WalletAmountEvent;
use App\Models\Wallet;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class WalletAmountOutListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  WalletAmountEvent  $event
     * @return void
     */
    public function handle(WalletAmountEvent $event)
    {
        if($event->type == Wallet::WALLET_OUT){
            $amount =0 - abs($event->amount);
            $event->customer->wallets()->create([
                "amount"=>$amount,
                "type"=>$event->type,
                "content"=>$event->content
            ]);
        }
    }
}
