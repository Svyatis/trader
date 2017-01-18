<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Wines extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'wines';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'price', 'min_quantity', 'max_quantity', 'type',
    ];
}
