<?php

if($_POST["submit"]) {
    $recipient="hudgins_michelle@yahoo.com";
    $subject="Form to email message";
    $sender=$_POST["name"];
    $senderEmail=$_POST["e_mail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent. I will get back to you within the next twenty four hours.</p>";
}

?>


<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
<link href="css/contact.css" rel="stylesheet" type="text/css">
</head>

<body>
</body>
</html>