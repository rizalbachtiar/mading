<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pengguna extends Model
{
    use HasFactory;
    use Authenticatable;

    public $table        = 'pengguna';
    public $primaryKey   = 'id';
    public $incrementing = true;
    public $timestamps   = true;
    public $guarded      = [];

    public function getAuthIdentifierName()
    {
        return 'id';
    }
    public function getAuthIdentifier()
    {
        return $this->getKey();
    }

    public function getAuthPassword()
    {
        return $this->password;
    }
}
