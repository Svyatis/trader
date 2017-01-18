<?php
/**
 * Created by PhpStorm.
 * User: svyat
 * Date: 16.12.2016
 * Time: 12:36
 */

namespace App\Repositories;

use App\Entities\Wines;
use App\Entities\Grocery;

class ProductsRepository
{
    private $wines;
    private $grocery;

    public function __construct(Wines $wines, Grocery $grocery)
    {
        $this->wines = $wines;
        $this->grocery = $grocery;
    }

    public function getProducts() {
        try {
            $wines = $this->wines->all();
            $grocery = $this->grocery->all();
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
                'status' => 500
            ]);
        }
        return response()->json([
            'wines' => $wines,
            'grocery' => $grocery,
            'status' => 200
        ]);
    }
}