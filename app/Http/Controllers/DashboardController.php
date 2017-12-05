<?php

namespace App\Http\Controllers;

use App\Blacklist;
use App\Comment;
use App\Post;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    //
    public function __invoke()
    {

        $postsForToday = Post::where('created_at', '>', Carbon::now()->startOfDay())->count();
        $commentsForToday = Comment::where('created_at', '>', Carbon::now()->startOfDay())->count();
        $usersForToday = Comment::where('created_at', '>', Carbon::now()->startOfDay())->groupBy('email')->count();
        $blacklistCount = Blacklist::count();

        return view('welcome', compact('postsForToday', 'commentsForToday', 'usersForToday', 'blacklistCount'));
    }
}
