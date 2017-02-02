<?php
namespace app\Services;

use Illuminate\Http\Request;
use App\Entities\Wine;

class UploadService
{
    private $model;

    public function __construct(Wine $wines) {
        $this->model = $wines;
    }
    /**
     * @param Request $request
     * @return mixed
     */
    public function store(Request $request)
    {
        if ( !empty( $request ) && is_object($request['file']) ) {
            $ext = $request->file->extension();
            $store = $request->file->storeAs('images', 'img' . rand(1, 50000000000) . '.' . $ext);
            return $store;
        }
        return false;
    }
}