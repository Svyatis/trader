<?php
/**
 * Created by PhpStorm.
 * User: svyat
 * Date: 16.12.2016
 * Time: 12:36
 */

namespace App\Repositories;

use App\Entities\Products;

class ProductsRepository
{
    private $products;

    public function __construct(Products $products)
    {
        $this->products = $products;
    }

    public function getProducts() {
        try {
            $products = $this->products->all();
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
                'status' => 500
            ]);
        }
        return response()->json([
            'products' => $products,
            'status' => 200
        ]);
    }
}