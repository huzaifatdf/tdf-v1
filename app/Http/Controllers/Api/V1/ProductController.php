<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Api\BaseController;
use App\Models\Product;

class ProductController extends BaseController
{
    public function index()
    {
          return Product::published()->orderBy('priority', 'asc')->get();
    }
}
