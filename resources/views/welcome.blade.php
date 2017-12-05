@extends('layout')
@section('content')
    <div class="row">
        <div class="col-md-3">
            <div class="db-indicator">
                <div class="db-indicator__icon">
                    <i class="fa fa-file-text"></i>
                </div>
                <div class="db-indicator__value">
                    {{$postsForToday}}
                </div>
                <div class="db-indicator__caption">
                    Ierakstu sodien
                </div>
            </div>

        </div>
        <div class="col-md-3">
            <div class="db-indicator red">
                <div class="db-indicator__icon">
                    <i class="fa fa-comments"></i>
                </div>
                <div class="db-indicator__value">
                    {{$commentsForToday}}
                </div>
                <div class="db-indicator__caption">
                    Komentaru sodien
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="db-indicator green">
                <div class="db-indicator__icon">
                    <i class="fa fa-users"></i>
                </div>
                <div class="db-indicator__value">
                    {{$usersForToday}}
                </div>
                <div class="db-indicator__caption">
                    Komentatoru sodien
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="db-indicator orange">
                <div class="db-indicator__icon">
                    <i class="fa fa-ban"></i>
                </div>
                <div class="db-indicator__value">
                    {{$blacklistCount}}
                </div>
                <div class="db-indicator__caption">
                    Bloketie lietotaji
                </div>
            </div>
        </div>

    </div>
@endsection
