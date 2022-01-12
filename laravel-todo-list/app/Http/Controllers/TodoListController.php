<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ListItem;

class TodoListController extends Controller
{
    public function index()
    {
        return view('welcome', ['listItems' => ListItem::all()]);
    }

    public function saveItem(Request $request)
    {
        $temp = new ListItem;
        $temp->name = $request->name;
        $temp->is_complete = 0;
        $temp->save();
        return redirect('/');
    }

    public function mark($id)
    {
        $temp = ListItem::find($id);
        $temp->is_complete = 1;
        $temp->save();
        return redirect('/');
    }
}
