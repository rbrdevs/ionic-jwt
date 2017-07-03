<?php

require_once dirname(__FILE__).'/vendor/autoload.php';

use CLASSES\AUTH\AuthJWT as AuthJWT;

const SECRET = 'ltNEP0VGxw';
$token = md5(SECRET.$_GET['ida']);
$auth_jwt = new AuthJWT();

if ($auth_jwt->register($_GET['ida'],$token)) {
    echo "OK!";
} else 
    echo "KO";
