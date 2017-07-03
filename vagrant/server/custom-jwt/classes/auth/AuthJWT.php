<?php

namespace CLASSES\AUTH;

class AuthJWT 
{
    const SECRET = 'ltNEP0VGxw';

    /**
     * Realiza el login de un usuario con un token válido
     *
     * @param string $id id del usuario
     * @param string $token token de validación
     * @return array
     **/
    public function register($id,$token)
    {        
        if ($token == md5($this::SECRET.$id)) {
            //TODO: Insertar en BD el login
            return true;
        } else
            return false;
    }

    public function checkLogin($jwt_token) {
        
    }

    private function output($data) {
        echo json_encode($data);
    }
}

