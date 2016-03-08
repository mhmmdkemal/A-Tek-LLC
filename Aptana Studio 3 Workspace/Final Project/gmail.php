<?php
require_once("phpMailer/PHPMailerAutoload.php");
?>

<!DOCTYPE html> 
<html>

<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, intial-scale=1">

<title>Wildlife Collision Management Program</title>

<link rel='stylesheet' href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>


<link rel='stylesheet' href="custom.css">
</head>

<body>
	<div class="container">
		<header class="row">
			</header>
			<div class="row"> <!-- navbar -->
				<div>
				</div> <!--content div-->
				<nav class="navbar navbar-default">
					<div class="container-fluid">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"> </span>
								<span class="icon-bar"> </span>
								<span class="icon-bar"> </span>
							</button>
							<a class="navbar-brand" href="#">Wildlife Collision Management</a>
						</div>
						
						<div>
						
						<div class="collapse navbar-collapse" id="navbar">
							<ul class="nav navbar-nav navbar-right">
								<li><a href="index.html">Home</a></li>
								
								<li class="dropdown">
									<a class="dropdown-toggle" data-toggle="dropdown" href="#">Disease Outbreak
										<span class="carat"> </span></a>
										<ul class="dropdown-menu">
											<li> <a href="report_collisions.html">Report Disease</a></li>
											<li><a href="show_collision.php">Show Disease</a></li>
											<li><a href="gelocation.html">Mapping</a></li>
										</ul>
								</li>
								<li class="dropdown">
									<a class="dropdown-toggle" data-toggle="dropdown" href="#">Ethiopia
										<span class="carat"> </span></a>
										<ul class="dropdown-menu">
											<li><a href="information.php">Information</a></li>	
											<li><a href="SlideShow.html">Gallery</a></li>																																	
																					
										</ul>
								</li>	
								</li>									
								<li><a href="contact.html">Contact</a></li>
							</ul>
							</div>
						</div>
					</div><!-- end container-fluid -->
				</nav>
			</div>
		<div id ="content">
			<?php
				


				$name = $_POST['name'];
				$email = $_POST['email'];
				$subject = $_POST['subject'];
				$message = $_POST['message'];
	
				if(empty($name)){
					print "<p>Please enter a name.</p>";
					
				}else if (empty($email)){
					print "<p>Please enter an e-mail address.</p>";
					
				}else{
					send_email($name,$email,$subject,$message);
				}
				function send_email($fromEmail,$fromName,$subject,$message){
					$mailer = new PHPMailer();
					$mailer -> isSMTP();
		
					$mailer -> SMTPAuth = TRUE;
					$mailer -> Host = "ssl://smtp.gmail.com:465";
		
					$mailer -> Username="geogumd@gmail.com";
					$mailer -> Password="mps12345";
		
					$mailer ->From=$fromEmail;
					$mailer ->FromName=$fromName . "(" . $fromEmail . ")";
		
					$mailer -> Subject = $subject;
					$mailer -> Body = $message;
		
					$mailer -> addAddress("mkah91@gmail.com", "Mohammed Kemal");
					$mailer -> addBCC("mkemal1@terpmail.umd.edu");
		
					if(!$mailer->send()){
						$h = "Mailer Error" . $mailer->ErrorInfo;
						$m = "Mailer Error was not sent";
						print "<h1>$h</h1>";
						print "<pre>$m</pre>";
					}else{
						print "<h1>Mail Sent</h1>";
						print "<p>Thank you. Message has been sent successfully.</p>";
					}
			}

?>
		
			<footer>
				<p class="text-right">Allcontents &amp; All rights reserved. &copy; Mohammed Kemal</p>
			</footer>
	</div>
	

</body>
	
</html>