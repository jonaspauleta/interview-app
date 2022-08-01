<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Interview extends Model
{
    use HasFactory;

    protected $fillable = [
        'time',
        'day',
        'selected',
        'user_id',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
