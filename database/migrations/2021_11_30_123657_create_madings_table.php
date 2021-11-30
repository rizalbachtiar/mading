<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMadingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('madings', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('photo')->nullable();
            $table->text('photo_detail')->nullable();
            $table->text('salam_redaksi')->nullable();
            $table->text('susunan_redaksi')->nullable();
            $table->text('berita_utama')->nullable();
            $table->text('opini')->nullable();
            $table->text('puisi')->nullable();
            $table->text('pantun')->nullable();
            $table->text('cerpen')->nullable();
            $table->text('artikel')->nullable();
            $table->text('humor')->nullable();
            $table->text('tips_trik')->nullable();
            $table->text('pojok_mading')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('madings');
    }
}
