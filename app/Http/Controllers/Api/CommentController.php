<?php

namespace App\Http\Controllers\Api;

use App\Blacklist;
use App\Comment;
use App\Http\Requests\StoreCommentRequest;
use App\Post;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CommentController extends Controller
{
    //

    /**
     * Store a newly created resource in storage.
     *
     * @param  StoreCommentRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCommentRequest $request, $postId)
    {
        //@todo: Move common web and api methods to repositories
        $post = Post::findOrFail($postId);

        $comment = new Comment($request->all());
        $post->comments()->save($comment);

        return $post->comments;
    }

    public function destroy(Request $request, $postId, $commentId)
    {
        //@todo: Move common  web and api methods to repositories
        $post = Post::findOrFail($postId);
        $post->comments()->where(['id' => $commentId])->delete();

        return $post->comments;
    }
    public function block($postId, $commentId)
    {
        $post = Post::findOrFail($postId);

        $comment = Comment::findOrFail($commentId);
        Comment::where(['email' => $comment->email])->delete();
        Blacklist::firstOrCreate(['email' => $comment->email]);
        return $post->comments;

    }
}
