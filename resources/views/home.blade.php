@extends('layouts.main')

@section('title','iBread Company')

@section('container-top')
    <div class="row">
        <div class="col-md-2 no-padding">
            <a href="/">
                <img src="/images/toopixel-ibread-logo.jpg" title="TooPixel iBread Logo" alt="iBread"/>
            </a>
        </div>
        <div class="col-md-10"></div>
    </div>
    <div class="row top-margin">
        <div class="col-md-5 col-sm-7 col-xs-1 no-padding">
            <img class="img-phone animation-element fade-in" src="/images/toopixel-phone-bread-dancer.jpg"
                 title="TooPixel featured image"
                 alt="TooPixel Featured image"/>
        </div>
        <div class="col-md-7 no-padding">
            <h1 class="animation-element slide-right">Remarkable bread slices
                <div class="clearfix visible-md visible-lg"></div>
                right from the start
            </h1>
        </div>
        <div class="col-md-7 introduction no-padding top-margin-small animation-element fade-in">
            <p>Tired of fat and uneven bread slices? Sick of loosing your
                fingers while cutting them so badly that not even the best doctor
                can stitch them back up?</p>
        </div>
        <div class="col-3 clearfix visible-sm"></div>
        <div class="col-md-3 text no-padding top-margin-small animation-element slide-left">
            <p>Don't worry my chum, all your worries are coming to an end. A
                revolutionary new app, iBread will change your miserable life
                forever. Dont loose your time, nerves or blood anymore cause of
                those darn, pesky uneven bread slices. iBread helps you to
                calculate, guide and slice the most perfect slice of bread every,
                yes every single time.</p>
        </div>
        <div class="col-md-3 text top-margin-small animation-element slide-right">
            <p>No matter what bread it is, no matter what flour is being used or
                how baked it might be, its perfect, every time. For only 500.99€
                join the legions of happy bread slicers and live more rich,
                fruitfull life as opposed to the pathetic one you lead so far.</p>
            <p>Welcome to the future, welcome to the iBread!</p>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-7 no-padding">
            <a href="#app-store" title="Available on AppStore" class="animation-element fade-in">
                <img src="/images/toopixel-available-on-appstore.gif" title="Available on AppStore"
                     alt="Available on AppStore"/>
            </a>
        </div>
    </div>
@endsection

@section('container-middle')
    <div class="row ">
        <div class="col-md-12">
            <div class="header">
                <h2 class="animation-element fade-in-fast">The best thing that could hapen to a sliced bread</h2>
                <div class="text top-margin-medium animation-element fade-in">
                    <p>Just take a look at amazing bread slices that other users of iBread
                        have done. Do you like them? you really, but you REALLY should like
                        them. <span class="clearfix visible-lg"></span>These are pieces of contemporary art man, be hip,
                        be now, make the
                        perfect slice of bread, every time!
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        @for($i = 1; $i < 9; $i++)
            <div class="col-md-3 col-sm-4 col-xs-6 bread animation-element slide-left no-padding top-margin-small">
                <a href="#bread-{{$i}}">
                    <img src="/images/toopixel-eye-hover.png" class="eye" alt="Eye"/>
                    <img src="/images/toopixel-sliced-bread-{{$i}}.gif" title="TooPixel Sliced Bread {{$i}}"
                         alt="TooPixel Sliced Bread {$i}}"/>
                </a>
            </div>
        @endfor
    </div>
@endsection

@section('container-bottom')
    <div class="row">
        <div class="col-md-12">
            <div class="logo">
                <img src="/images/toopixel-footer-ibread-logo.png" title="iBread Logo Dark"
                     alt="iBread logo dark"/>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <footer class="top-margin-large">
                <h3>Thank you for your time</h3>
                <p>Or you can contact us at: <a href="mailto:info@ibread.com" title="Contact Us">info@ibread.com</a>
                </p>
            </footer>
        </div>
    </div>
@endsection