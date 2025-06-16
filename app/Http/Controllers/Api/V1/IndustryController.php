<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Api\BaseController;
use App\Models\Industry;

class IndustryController extends BaseController
{
    public function index()
    {
          return Industry::published()->orderBy('priority', 'asc')->get();
    }
}
