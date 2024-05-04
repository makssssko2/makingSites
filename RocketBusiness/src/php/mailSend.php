<?php
    $to = "rbru-metrika@yandex.ru";
    $subject; 
    $email = $_POST["email"];
    $message;
    if($_POST["message"]) {
        $message = "Сообщение:  ".$_POST["message"];
        $subject = "Запись на прием";
    } else {
        $subject = "Запись на чекап";
    }
    
    $body = "Email: $email\n$message";
    
    mail($to, $subject, $body);

    header("Location: ./../index.html");
    exit();
?>