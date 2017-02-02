<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Wine extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'wines';
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'price', 'min_quantity', 'max_quantity', 'type', 'photo'
    ];
}