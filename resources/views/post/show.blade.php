@extends('layout')
@section('content')
    <div id="react-post" data-post-id={{$post->id}}></div>
@endsection
@section('title') Editing post #{{$post->id}} @endsection