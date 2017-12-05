<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\UpdatePostRequest;
use App\Post;
use App\Http\Controllers\Controller;

class PostController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Post::findOrFail($id);
        $post->load('comments');
        return $post;
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  UpdatePostRequest  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePostRequest $request, $id)
    {
        $post = Post::findOrFail($id);
        $post->update($request->all());

        return $post;
    }
}
