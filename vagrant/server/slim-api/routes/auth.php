<?php

use Firebase\JWT\JWT;

function generateJWT($server) {
    $now = new DateTime();
    $future = new DateTime("now +30 seconds");
    $server = $server;
    $payload = [
        "iat" => $now->getTimeStamp(),
        "exp" => $future->getTimeStamp(),
    ];
    $secret = '123456789';
    $token = JWT::encode($payload, $secret, "HS256");
    $data["token"] = $token;
    $data["expires"] = $future->getTimeStamp();

    return $data;
}

$app->group('/auth',function() {

    $this->post("/login", function ($request, $response, $arguments) {
        //TODO: Validación de usuario y password
        $data = generateJWT($request->getServerParams());
        return $response->withStatus(201)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    });

    $this->post("/token", function ($request, $response, $arguments) {
        $data = generateJWT($request->getServerParams());
        return $response->withStatus(201)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    });

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