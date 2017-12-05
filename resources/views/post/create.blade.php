@extends('layout')
@section('content')
    <h1>Jauna ieraksta izveidošana</h1>

     {{ method_field('PUT') }}

     @if (count($errors) > 0)
        <h2>Jūsu ievadītajos datos bija nepilnības</h2>
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    @endif


    <form action="{{ action('PostController@store') }}" method="post">
        {{ csrf_field() }}
        <div class="form-group">
            <label>Ieraksta virsraksts</label>
            <input class="form-control" type="text" name="title" value="{{ old('title') }}">
        </div>
        <div class="form-group">
            <label>Ieraksta teksts</label>
            <textarea class="form-control" name="text">{{ old('text') }}</textarea>
        </div>
        <button class="btn btn-primary" type="submit">Izveidot</button>
    </form>
@endsection
@section('title') Creating post @endsection