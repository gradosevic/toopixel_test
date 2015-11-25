<!DOCTYPE html>
<html lang="en">
<head>
    @include('common.head')
</head>
<body>
<div class="container container-top">
    @yield('container-top')
</div>
<div class="container-fluid container-middle top-margin-large bottom-padding-large">
    <div class="container">
        @yield('container-middle')
    </div>
</div>
<div class="container-fluid container-bottom bottom-padding-large">
    <div class="container">
        @yield('container-bottom')
    </div>
</div>
@include('common.templates')
@include('common.scripts')
</body>
</html>

