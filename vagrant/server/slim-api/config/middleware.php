<?php

use App\Token;
use Slim\Middleware\JwtAuthentication;

$container = $app->getContainer();

$container["token"] = function ($container) {
    return new Token;
};

$container["JwtAuthentication"] = function ($container) {
    return new JwtAuthentication([
        "path" => "/",
        "passthrough" => ["/login", "/info"],
        "secret" => '123456789',
        //"logger" => $container["logger"],
        //"relaxed" => ["192.168.50.52"],
        "error" => function ($request, $response, $arguments) {
            return $response
                ->withHeader("Content-type", "application/problem+json")
                ->write(json_encode(array('success' => false, 'message' => 'Error en token')));
        },
        "callback" => function ($request, $response, $arguments) use ($container) {
            //$container["token"]->hydrate($arguments["decoded"]);
        }
    ]);
};

$app->add("JwtAuthentication");

