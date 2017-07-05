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
require __DIR__ . "/routes/login.php";
//require __DIR__ . "/routes/todos.php";
$app->run();