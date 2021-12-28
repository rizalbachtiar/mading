<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Magazine;

class Attachment extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function magazine()
    {
        return $this->belongsTo(Magazine::class);
    }
}
