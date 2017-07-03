<?php

use Firebase\JWT\JWT;
$app->post("/token", function ($request, $response, $arguments) {
    $now = new DateTime();
    $future = new DateTime("now +2 hours");
    $server = $request->getServerParams();
    $payload = [
        "iat" => $now->getTimeStamp(),
        "exp" => $future->getTimeStamp(),
    ];
    $secret = '123456789';
    $token = JWT::encode($payload, $secret, "HS256");
    $data["token"] = $token;
    $data["expires"] = $future->getTimeStamp();
    return $response->withStatus(201)
        ->withHeader("Content-Type", "application/json")
        ->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
});
/* This is just for debugging, not usefull in real life. */
$app->get("/dump", function ($request, $response, $arguments) {
    print_r($this->token);
});
$app->post("/dump", function ($request, $response, $arguments) {
    print_r($this->token);
});
/* This is just for debugging, not usefull in real life. */
$app->get("/info", function ($request, $response, $arguments) {
    phpinfo();
});

$app->get("/admin", function ($request, $response, $arguments) {
    $response->write('<h1>Admin area!!</h1>');
});