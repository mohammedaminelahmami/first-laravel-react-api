<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index()
    {
        return 'Hello World';
    }

    // function add Product
    public function store(Request $request)
    {
        $productName = $request->input('productName');
        $price = $request->input('price');
        $category = $request->input('category');
        
        // Product::create([
        //     'productName' => $productName,
        //     'price' => $price,
        //     'category' => $category,
        // ]);

        DB::insert('INSERT INTO products (productName, price, category) VALUES (?, ?, ?)', [$productName, $price, $category]);
    }

    // function get Product
    public function get()
    {
        $data = Product::all();
        return $data;
    }

    // function update Product
    public function update()
    {

    }

    // function delete Product
    public function destroy()
    {

    }
}
