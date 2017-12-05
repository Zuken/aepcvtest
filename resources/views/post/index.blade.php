@extends('layout')
@section('content')
    <ul class="list-group">
        @foreach ($posts as $post)
            <li class="list-group-item">
                <form action="{{route('post.destroy', $post->id)}}" method="POST" class="pull-right">
                    {!! method_field('DELETE') !!}
                    {!! csrf_field() !!}
                    <button class="btn btn-xs btn-danger">Dzest</button>
                </form>
                <a href="{{ action('PostController@show', $post) }}" class="list-group-item-heading">
                    #{{ $post->id }} {{ $post->title }}
                </a>
                <p class="list-group-item-text">
                    Pievienots: {{ $post->created_at->format(config('blog.datetime_format')) }}
                </p>
                <p class="list-group-item-text">
                    Izmainits: {{ $post->updated_at->format(config('blog.datetime_format')) }}
                </p>
            </li>
        @endforeach
    </ul>
    {!! $posts->links() !!}
    <p><a href="{{ action('PostController@create') }}">Pievienot jaunu ierakstu</a></p>
@endsection
@section('title') Blog index @endsection