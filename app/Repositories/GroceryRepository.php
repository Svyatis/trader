<?php

namespace App\Repositories;

use App\Entities\Grocery;
use App\Entities\PriceDependency;

class GroceryRepository
{
    private $model;
    private $priceDep;

    /**
     * Constructor
     * @param $grocery
     * @param $priceDep
     */
    public function __construct(Grocery $grocery, PriceDependency $priceDep)
    {
        $this->model = $grocery;
        $this->priceDep = $priceDep;
    }

    /**
     * Return all products.
     * @return mixed
     */
    public function getProducts() {
        try {
            $grocery = $this->model->with('priceDependencies')->get();
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
                'status' => 500
            ]);
        }
        return $grocery;
    }

    /**
     * @param $request
     * @return mixed
     */
    public function searchData($request) {
        $name = $request->has('name') ? $request->get('name') : '';
        $minPrice = $request->has('start') ? $request->get('start') : null;
        $maxPrice = $request->has('end') ? $request->get('end') : null;
        $arr = [$minPrice, $maxPrice];
        $resp = $this->model->where('name', 'like', '%' . $name . '%')->whereBetween('price', $arr)->get();
        return $resp->toArray();
    }

    public function getType() {
        $type = $this->model->select('type')->distinct()->get();
        return $type;
    }

    /**
     * Display template images.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getImage($id) {
        return $this->model->find($id);
    }

    /**
     * Return one product by id
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function getProduct($id) {
        if($product = $this->model->with('priceDependencies')->find($id)) {
            return response()->json([
                'status' => 200,
                'message' => 'OK',
                'product' => $product
            ]);
        }
        return response()->json([
            'status' => 500,
            'message' => 'Failed'
        ]);
    }

    /**
     * Save product.
     * @param $attributes
     * @return \Illuminate\Http\Response
     */
    public function saveProduct($attributes) {
        $grocery = $this->model->create($attributes);
        $crt = $grocery->save();
        if($crt) {
            return response()->json([
                'status' => 200
            ]);
        }
        return response()->json([
            'status' => 500
        ]);
    }

    /**
     * Update product.
     * @param  int  $id
     * @param  int  $data
     * @return \Illuminate\Http\Response
     */
    public function updateProduct($id, $data) {
        $product = $this->model->find($id);
        $upd = $product->update($data);
        foreach ($data['discount'] as $discount) {
            $priceDep = $this->priceDep->find($discount['id']);
            if($discount['price'] !== "null") {
                $attrs = [
                    'quantity' => $discount['quantity'],
                    'price' => $discount['price'],
                    'wine_id' => $discount['wine_id']
                ];
            }
            else {
                $attrs = [
                    'quantity' => null,
                    'price' => null,
                    'wine_id' => $discount['wine_id']
                ];
            }
            $priceDep->update($attrs);
        }
        if($upd == true) {
            return response()->json([
                'status' => 200,
                'message' => 'Product updated'
            ]);
        }
        return response()->json([
            'status' => 500,
            'message' => 'Failed to update product, please try again later'
        ]);
    }

    /**
     * Delete product.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function deleteProduct($id) {

        $product = $this->model->find($id);
        if($product != null) {
            $product->delete();
            return response()->json([
                'status' => 200
            ]);
        }
        else {
            return response()->json([
                'status' => 400
            ]);
        }
    }
}