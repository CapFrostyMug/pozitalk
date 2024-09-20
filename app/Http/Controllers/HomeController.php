<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controller as BaseController;

class HomeController extends BaseController
{
    public function index()
    {
        return view('welcome');
    }

    public function psy()
    {
        return view('psy');
    }
    public function lk()
    {
        return view('lk');
    }
    public function gift()
    {
        return view('gift');
    }
    public function tests()
    {
        return view('tests');
    }
    public function knowledge()
    {
        return view('knowledge');
    }
    public function testsTest()
    {
        return view('testsTest');
    }
}
