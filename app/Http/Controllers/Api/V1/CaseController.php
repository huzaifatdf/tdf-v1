<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Api\BaseController;
use App\Models\Caselist;
use App\Models\Casestudy;

class CaseController extends BaseController
{
    public function index()
    {
          return Casestudy::where('status', 'published')
            ->orderBy('priority', 'desc')
            ->get();
    }
}
