<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Page;

class Magazine extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function comments()
    {
        return $this->hasMany(Page::class);
    }
}
