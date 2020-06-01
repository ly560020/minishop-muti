<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddServiceQrCodeToSysCenterSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sys_center_settings', function (Blueprint $table) {
            $table->string('service_qr_code')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sys_center_settings', function (Blueprint $table) {
            $table->dropColumn('service_qr_code');
        });
    }
}
