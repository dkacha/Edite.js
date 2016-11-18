<?php
    session_start();
   // header('Content-type: application/json');


    include('user.php');

    $aw['connection'] = 'edite';

    function validInput($string) {
        return htmlspecialchars(strip_tags(trim($string)));
    }

    function hashPassword($pass){
        $salt = 'X_N#X&xy#r@o!';
        $hashed = '#?'.(hash('sha256', (md5($pass)) . $salt));
        return $hashed;
    }
    
    function checkHashPassword() {
        global $user;
        
        $userFile = file_get_contents("user.php");
        $passChange = false;
        
        foreach ($user as $name => $pass) {

            if ( substr($pass, 0, 2) != '#?') {
                $origin = $pass;
                $hash = hashPassword($pass);
                
                $userFile = str_replace($origin, $hash, $userFile);
                $user[$name] = $hash;
                
                $passChange = true;
            }
        }
        
        if ($passChange) {
            $soubor = fopen("user.php", "w"); 
            fwrite($soubor, $userFile); 
            fclose($soubor);
        }
    }



    
    if (!isset($_POST['action'])) {
        exit();
    }
    
    else if( $_POST['action'] == 'login' ) {
        $_name = validInput($_POST['name']); 
        $_pass = validInput($_POST['pass']);
        
        checkHashPassword();
        
        
        if( isset($user[$_name]) && $user[$_name] == hashPassword($_pass)) {
            $aw['status'] = 1;    
        }else {
            $aw['status'] = 0;
        }    
    }


    echo json_encode($aw);



?>