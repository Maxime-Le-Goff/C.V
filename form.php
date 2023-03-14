<?php

$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

   if (empty($firstname)) {
       $errors[] = 'Le prénom est vide';
   }

   if (empty($lastname)) {
    $errors[] = 'Le nom est vide';
}

   if (empty($email)) {
       $errors[] = 'L\'email est vide';
   } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       $errors[] = 'L\'email est invalide';
   }

   if (empty($message)) {
       $errors[] = 'Le message est vide';
   }

   if (empty($errors)) {
       $toEmail = 'mlgwebdev@gmail.com';
       $emailSubject = 'C.V Contact Form';
       $headers = ['From' => $email, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=utf-8'];
       $bodyParagraphs = ["Name: {$firstname} {$lastname}", "Email: {$email}", "Message:", $message];
       $body = join(PHP_EOL, $bodyParagraphs);

       if (mail($toEmail, $emailSubject, $body, $headers)) 

           header('Location: Merci.php');
       } else {
           $errorMessage = 'Oops une erreur est survenue, veuillez réessayer plus tard';
       }

   } else {

       $allErrors = join('<br/>', $errors);
       $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
   }


?>