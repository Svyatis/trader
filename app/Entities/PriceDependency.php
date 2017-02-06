<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class PriceDependency extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'price_dependency';
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'quantity', 'price', 'wine_id'
    ];
}
