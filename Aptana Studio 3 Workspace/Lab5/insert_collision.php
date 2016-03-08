<!DOCTYPE html> 
<html>

<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, intial-scale=1">

<title>Report a Wildlife Road Collision</title>

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
									<a class="dropdown-toggle" data-toggle="dropdown" href="#">Collisions
										<span class="carat"> </span></a>
										<ul class="dropdown-menu">
											<li> <a href="report_collisions.html">Report Collisions</a></li>
											<li><a href="#">Show Collisions</a></li>
										</ul>
								</li>
								
								<li><a href="#">Information</a></li>
								<li><a href="#">Contact</a></li>
							</ul>
							</div>
						</div>
					</div><!-- end container-fluid -->
				</nav>
				<div id="content">
					<h2>Report a Wildlife Road Collision</h2>
				<?php 
					$species1 = $_POST['species'];
					$species2 = $_POST['txtSpecies'];
					
					$gender = $_POST['rbGender'];
					$age = $_POST['rbAge'];
					$date = $_POST['rpDate'];
					$location = $_POST['location'];
					$latitude = $_POST['lat'];
					$longitude = $_POST['lng'];
					
					if($species1 == "Others")
						$species1 = $species2;
					if(!empty($species1) && is_string($species1) && isset($latitude) && is_numeric($latitude) && isset($longitude) && is_numeric($longitude)){					
						echo "<p>Your information has been recorded</p>
							<dl>
								<dt>Species</dt>
								<dd>$species1</dd>
								<dt>Gender</dt>
								<dd>$gender</dd>
								<dt>Age</dt>
								<dd>$age</dd>
								<dt>Location</dt>
								<dd> $location</dd>
								<dt>Latitude</dt>
								<dd> $latitude </dd>
								<dt>Longitude</dt>
								<dd>$longitude</dd>
							</dl>";
						} 
					else {
						echo "<h4>SORRY</h4>
						<p>You did not fill out the form completely. <a href='report_collisions.html'> Try again? </a></p>";
					}
				?>
 
				</div> <!--content div-->
				
			</div>
		
		
		<footer>
			<p class="text-right">All contents &amp; All rights reserved. &copy; Mohammed Kemal</p>
		</footer>
	</div>
	

</body>
	
</html>