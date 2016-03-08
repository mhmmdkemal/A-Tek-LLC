<!DOCTYPE html> 
<html>

<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, intial-scale=1">

<title>Show Disease Outbreak</title>

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
					</div> <!--header -->
					
					<!--<div>  -->
					
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
					<!--</div>  -->
				</div><!-- end container-fluid -->
			</nav>
		</div>
		
		<div id ="content">
			<h3>A list of disease outbreaks</h3>
			
			<div id="showDiv" class="table-responsive">
				<?php
					require_once("db.php");
					
					$sql = "select * from collisions limit 15";
					$result = mysqli_query($con,$sql);
					
					if (!$result) {
						die("Invalid query: " . mysql_error());
					}
				?>
				
				<table class="table table-hover">
					<thead>
						<tr class="active">
							<th>ID</th>
							<th>Report Date</th>
							<th>Species</th>
							<th>Gender</th>
							<th>Age Class</th>
							<th>Location</th>
							<th>Latitude</th>
							<th>Longitude</th>
							<th>Picture</th>
						</tr>
					</thead>
					<tbody>
					<?php
						$rowNum=0;
						
						while($row = mysqli_fetch_array($result)){
							if ($rowNum % 4 == 0){
								$contextClass= "success";
							}else if ($rowNum % 3 == 0){
								$contextClass= "info";
							}else if ($rowNum % 2 == 0){
								$contextClass= "warning";
							}else{
								$contextClass= "danger";
							}
							
							echo"<tr class=" . $contextClass .">";
							echo "<td>" . $row["id"]. "</td>";
							echo "<td>" . $row["report_date"]. "</td>";
							echo "<td>" . $row["species"]. "</td>";
							echo "<td>" . $row["gender"]. "</td>";
							echo "<td>" . $row["age"]. "</td>";
							echo "<td>" . $row["location"]. "</td>";
							echo "<td>" . $row["latitude"]. "</td>";
							echo "<td>" . $row["longitude"]. "</td>";
							echo "<td><img alt='img' width=50 height=50 src='". $row["img_url"]. "'/></td>";
							echo "</tr>";
							
							$rowNum += 1;
						}
					?>
					</tbody>
				</table>
		</div> <!--content div-->
			
	<!--	</div>  -->
		
		
		<footer>
			<p class="text-right">All contents &amp; All rights reserved. &copy; Mohammed Kemal</p>
		</footer>
	</div>
	

</body>
	
</html>