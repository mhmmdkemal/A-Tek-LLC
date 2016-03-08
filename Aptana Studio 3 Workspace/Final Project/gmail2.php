<?php
	require_once("PHPMailerAutoload.php")
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
					<h2>Main Content</h2>
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
											<li> <a href="report_collision.html">Report Disease</a></li>
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
								<li><a href="contact.html">Contact</a></li>
							</ul>
							</div>
						</div>
					</div><!-- end container-fluid -->
				</nav>
			</div>
			<div>
				<h2>E-mail Form Submitted</h2>
				
				<?php
				
					$name = $_POST['name'];
					$email = $_POST['email'];
					$subject = $_POST['subject']
					$message = $_POST['message']
					
					if (empty($name)){
						print ("<p>Please enter a name</p>");
						)
					else if (empty($mail))(
						print ("<p>Please enter an email adress</p>");
						)
					else (
						send_email();
					)
				?>									
					if(!empty($species1) && is_string($species1) && isset($latitude) && is_numeric($latitude) && isset($longitude) && is_numeric($longitude))
					{
				?>	
					<p>
						Your information has been recorded
					</p>
				<?php
			} else {
					print("<p>notsent.</p>");}
				 ?>
			</div>
		
		
			<footer>
				<p class="text-right">All contents &amp; All rights reserved. &copy; Mohammed Kemal</p>
			</footer>
	</div>
	

</body>
	
</html>