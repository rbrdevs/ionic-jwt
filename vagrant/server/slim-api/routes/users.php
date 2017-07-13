<?php

use Firebase\JWT\JWT;

$app->group('/users',function() {

    $this->get('/',function($request, $response, $arguments) {
        $data = array(
            array(
                "name" => "Raul",
                "photo" => "https://api.randomuser.me/portraits/thumb/men/5.jpg"
            ),
            array(
                "name" => "Pedro",
                "photo" => "https://api.randomuser.me/portraits/thumb/men/53.jpg"
            )
        );
        return $response->withStatus(200)
            ->withHeader("Content-Type", "application/json")
            ->write(json_encode($data, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    });

});

