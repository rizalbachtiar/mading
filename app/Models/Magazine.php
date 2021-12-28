<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Page;
use App\Models\Attachment;

class Magazine extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function pages()
    {
        return $this->hasMany(Page::class);
    }

    public function attachment()
    {
        return $this->hasMany(Attachment::class);
    }
}
