<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class Grocery extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'grocery';
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'price', 'old_price', 'vendor', 'min_quantity', 'max_quantity', 'type', 'description', 'photo'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function priceDependencies()
    {
        return $this->hasMany(PriceDependency::class, 'wine_id', 'id');
    }
}
