<?php
function strip_crlf($string)
{
    return str_replace("\r\n", "", $string);
}
if (! empty($_POST)) {
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $email = $_POST["email"];
    $content = $_POST["content"];

    $toEmail = "mlgwebdev@gmail.com";
    // CRLF Injection attack protection
    $firstname = strip_crlf($firstname);
    $lastname = strip_crlf($lastname);
    $email = strip_crlf($email);
    if (! filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $message= "Adresse email invalide";
        $type = 'fail';
    } else {
        // appending \r\n at the end of mailheaders for end
        $mailHeaders = "From: " . $firstname . $lastname . "<" . $email . ">\r\n";
        if (mail($toEmail, 'CV', $content, $mailHeaders)) {
            
            $message = "Votre email a bien été envoyé.";
            $type = "success";
        } else {
            $message = "Echec de l'envoi";
            $type = "fail";
        } 
    }
}
require_once "Contact.php";
?>