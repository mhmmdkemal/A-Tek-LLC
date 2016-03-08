<?php

$autoResponse = false; // "true" enables the auto-response 
$autoResponseSubject = 'Thank you for contacting us';
$autoResponseMessage = 'This is just an automated response to let you know that we have successfully received your email! Thank you.';
$autoResponseHeaders = 'From: info@example.com';  

// Set the mail variables
$email_to =   "mkah91@gmail.com"; // The email address to which the email will be sent
$name     =   $_POST['name'];
$email    =   $_POST['email'];
$website    =   $_POST['website'];
$subject    =   $_POST['subject'];
$msg      =   $_POST['comments'];
$subjectH  =   'Mail from Sire';

$message = 'From: ' . $name . "\r\n" . 'Email: ' . $email . "\r\n\r\n" . 'Website: ' . $website . "\r\n\r\n". 'Subject: ' . $subject . "\r\n\r\n" . 'comments: ' . "\r\n" . $msg;

$headers = 'From: ' . $name.' <'.$email.'>' . "\r\n";
$headers .= 'Reply-To: ' . $email . "\r\n";

if(mail($email_to, $subjectH, $message, $headers)){
    if($autoResponse === true){
        mail($email, $autoResponseSubject, $autoResponseMessage, $autoResponseHeaders);
    }
    echo 'sent';
    //header( 'Location: http://../contact-us-success.html' ) ;
} else {
    echo 'failed';
    //header( 'Location: http://../contact-us-error.html' ) ;
}

?>