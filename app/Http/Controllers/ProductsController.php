<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\WineRepository;
use App\Repositories\GroceryRepository;
use App\Services\UploadService;

class ProductsController extends Controller
{
    private $wineRepo;
    private $groceryRepo;
    private $uploadServ;
    private $model;

    /**
     * Constructor
     * @param $groceryRepo, $wineRepo, $uploadServ
     * @param $wineRepo
     * @param $uploadServ
     * @return mixed
     */
    public function __construct(WineRepository $wineRepo, GroceryRepository $groceryRepo, UploadService $uploadServ)
    {
        $this->wineRepo = $wineRepo;
        $this->groceryRepo = $groceryRepo;
        $this->uploadServ = $uploadServ;
    }

    /**
     * Display a listing of the resource.
     *
     * @return mixed
     */
    public function index()
    {
        $wines = $this->wineRepo->getProducts();
        $groceries = $this->groceryRepo->getProducts();
        $winesType = $this->wineRepo->getType();
        $groceriesType = $this->groceryRepo->getType();
        $a1 = json_decode(json_encode($wines), true);
        $a2 = json_decode(json_encode($groceries), true);
        $res = array_merge_recursive( $a1, $a2 );
        return response()->json([
            'fullArray' => $res,
            'wines' => $wines,
            'groceries' => $groceries,
            'winesType' => $winesType,
            'groceriesType' => $groceriesType
        ]);
    }

    /**
     * Change models
     * @param $id
     * @return mixed
     */
    private function changeModel($id) {
        if($id != null && $id < 1000) {
            $this->model = $this->wineRepo;
        }
        elseif ($id != null && $id > 1000) {
            $this->model = $this->groceryRepo;
        }
        return response()->json([
            'message' => 'Please provide valid id',
            'code' => 400
        ]);
    }

    /**
     * Display template images.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getImage($id) {
        $this->changeModel($id);
        $photo = $this->model->getImage($id);
        $name = $photo['photo'];
        $path = storage_path('app'). DIRECTORY_SEPARATOR . $name;
        if (file_exists($path)) {
            $file = \File::get($path);
            $type = \File::mimeType($path);
            return \Response::make($file,200)
                ->header("Content-Type", $type);
        }
        return response()->json([
            'status' => 500,
            'message' => 'Failed load image'
        ]);
    }

    /**
     * Return product by id
     * @param $id
     * @return mixed
     */
    public function getProduct($id) {
        $this->changeModel($id);
        $product = $this->model->getProduct($id);
        return $product;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function searchData(Request $request) {
        $wineSearch = $this->wineRepo->searchData($request);
        $grocerySearch = $this->groceryRepo->searchData($request);
        $res = array_merge_recursive( $wineSearch, $grocerySearch );
        return response()->json([
            'status' => 200,
            'res' => $res,
            'wineSearch' => $wineSearch,
            'grocerySearch' => $grocerySearch
        ]);
    }

    /**
     * Store a newly created resource in storage.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        logger($request);
//        if( $request->get('type') == 'dry'
//            || $request->get('type') == 'sparkling'
//            || $request->get('type') == 'sweet') {
//            $this->model = $this->wineRepo;
//        } else {
//            $this->model = $this->groceryRepo;
//        }
//
//        $upload = $this->uploadServ->store($request);
//        if($upload) {
//            $data = [
//                'name' => $request->get('name'),
//                'vendor' => $request->get('vendor'),
//                'price' => $request->get('price'),
//                'old_price' => $request->get('old_price'),
//                'min_quantity' => $request->get('min_quantity'),
//                'max_quantity' => $request->get('max_quantity'),
//                'description' => $request->get('description'),
//                'type' => $request->get('type'),
//                'discount' => $request->get('discount'),
//                'photo' => $upload
//            ];
//        } else {
//            return response()->json([
//                'status' => 500,
//                'message' => 'Please try again later'
//            ]);
//        }
//        $db = $this->model->saveProduct($data);
//        return $db;
    }

    /**
     * Display the specified resource.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->changeModel($id);
        $upload = $this->uploadServ->store($request);
        if($upload) {
            $data = [
                'name' => $request->get('name'),
                'vendor' => $request->get('vendor'),
                'price' => $request->get('price'),
                'old_price' => $request->get('old_price'),
                'min_quantity' => $request->get('min_quantity'),
                'max_quantity' => $request->get('max_quantity'),
                'description' => $request->get('description'),
                'type' => $request->get('type'),
                'discount' => $request->get('discount'),
                'photo' => $upload
            ];
        } else {
            $data = [
                'name' => $request->get('name'),
                'vendor' => $request->get('vendor'),
                'price' => $request->get('price'),
                'old_price' => $request->get('old_price'),
                'min_quantity' => $request->get('min_quantity'),
                'max_quantity' => $request->get('max_quantity'),
                'description' => $request->get('description'),
                'type' => $request->get('type'),
                'discount' => $request->get('discount')
            ];
        }
        $db = $this->model->updateProduct($id, $data);
        return $db;
    }

    /**
     * Remove the specified resource from storage.
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $this->changeModel($id);
            $product = $this->model->deleteProduct($id);
        } catch (\Exception $e) {
            return response()->json([
                'code' => $e->getCode()
            ]);
        }
        return $product;
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function getDependencies () {
        $pricesWine = $this->wineRepo->getPriceDependencies();
        $pricesGrocery = $this->groceryRepo->getPriceDependencies();

        return response()->json([
            'pricesWine' => $pricesWine,
            'pricesGrocery' => $pricesGrocery
        ]);
    }
}
