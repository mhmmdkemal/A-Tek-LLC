<!DOCTYPE html> 
<html>

<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, intial-scale=1">

<title>Report Disease Outbreak</title>

<link rel='stylesheet' href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
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
							<a class="navbar-brand" href="#">Sustainability Management</a>
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
								<li><a href="contact.html">Contact</a></li>
							</ul>
							</div>
						</div>
					</div><!-- end container-fluid -->
				</nav>
				<div id="content">
					<h2>Report a Wildlife Road Collision</h2>
					
					<?php
						require_once("db.php");
						
						$imgURL = null;
					
						$species1 = $_POST['species'];
						$species2 = $_POST['txtSpecies'];
						
						$gender = $_POST['rbGender'];
						$age = $_POST['rbAge'];
						$date = $_POST['rpDate'];
						$location = $_POST['location'];
						$latitude = $_POST['lat'];
						$longitude = $_POST['lng'];
						 
						
						if($species1 === "Others")
								$species1 = $species2;
						
						
						
						if(!empty($species1) && is_string($species1) && !empty($location) && is_string($location) && isset($latitude) && is_numeric($latitude) && isset($longitude) && is_numeric($longitude)){
							echo "<p>Your report has been recorded.</p>
							<dl>
								<dt>Species:</dt>
								<dd>$species1</dd>
								<dt>Gender:</dt>
								<dd>$gender</dd>
								<dt>Age:</dt>
								<dd>$age</dd>
								<dt>Date:</dt>
								<dd>$date</dd>
								<dt>Location:</dt>
								<dd>$location</dd>
								<dt>Latitude:</dt>
								<dd>$latitude</dd>
								<dt>Longitude:</dt>
								<dd>$longitude</dd>
							</dl>";
						    
						    $upload_dir= "uploads/";
							
							//nested if to check a file is uploaded
							if (($_FILES["imgFile"]["type"] == "image/gif")||($_FILES["imgFile"]["type"] == "image/jpeg")
							||($_FILES["imgFile"]["type"] == "image/jpg")||($_FILES["imgFile"]["type"] == "image/pjpeg")
							||($_FILES["imgFile"]["type"] == "image/x-png")||($_FILES["imgFile"]["type"] == "image/png")
							&& ($_FILES["imgFile"]["size"] < 1000000)){//file size unit byte
								
								
								if ($_FILES["imgFile"]["error"] > 0){
									print('<p>File Upload Error:" . $_FILES["imgFile"]["error"] . </p>');
									
								}else{
										$filename = $_FILES["imgFile"]["name"];
										$tempname = $_FILES["imgFile"]["tmp_name"];
									if (file_exists($upload_dir . $filename)){
										print ("<p>Error file name ". $filename ." already exists!</p>");
									
										}else{
											if(move_uploaded_file($tempname, $upload_dir . $filename) == True){
											$imgURL = $upload_dir ."/". $filename;
											print ("<p>Uploaded successfully.</p>");
												
											}else {
												print ("<p>Could not upload file.</p>");
											}
											
									}
		
								}//else
							}
							else{
								print("<p>File Upload Error : Invalid file</p>");
							}
							$ufdate = strtotime($date);
							$fdate = date("m/d/Y", $ufdate);
							
							$sql= "insert collisions(species,gender,age, report_date, location, latitude,longitude, img_url) 
							values ('$species1','$gender','$age',STR_TO_DATE('$fdate', '%m/%d/%Y'), '$location' , '$latitude', '$longitude', '$imgURL')";
							
							$result = mysqli_query($con,$sql);
							if ($result){
								echo "<h4>Succeeded to insert a collision record!</h4>";
							}else{
								echo"<h4>Failed to insert a collision record!</h4>";
							}
							
						}else {
							echo "<p>The form was not filled out correctly. <a href='report_collisions.html'>Try Again?</a><p>";
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