<?php
require __DIR__ . "/vendor/autoload.php";

$app = new \Slim\App([
    "settings" => [
        "displayErrorDetails" => true,
        "addContentLengthHeader" => false,
    ]
]);

//require __DIR__ . "/config/dependencies.php";
//require __DIR__ . "/config/handlers.php";
require __DIR__ . "/config/middleware.php";
$app->get("/", function ($request, $response, $arguments) {
    print "Here be dragons";
});
require __DIR__ . "/routes/auth.php";
//require __DIR__ . "/routes/todos.php";


// CORS
/*

$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});
*/
/*
$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});
*/

$app->run();