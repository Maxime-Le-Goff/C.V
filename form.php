<?php
error_reporting(-1);
ini_set('display_errors', 'On');
set_error_handler("var_dump");
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
        echo "The email address is invalid.";
    } else {
        // appending \r\n at the end of mailheaders for end
        $mailHeaders = "From: " . $firstname . $lastname . "<" . $email . ">\r\n";
        if (mail($toEmail, 'CV', $content, $mailHeaders)) {
            
            $message = "Your contact information is received successfully.";
            $type = "success";
        } else {
            echo 'NON';
        }
    }
}
require_once "Contact.php";
?>