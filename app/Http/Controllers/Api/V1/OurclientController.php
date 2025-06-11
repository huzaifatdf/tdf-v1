<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Api\BaseController;
use App\Http\Controllers\Controller;
use App\Models\Ourclient;

class OurclientController extends BaseController
{
    public function index()
    {
          return Ourclient::published()->get();
    }
}
