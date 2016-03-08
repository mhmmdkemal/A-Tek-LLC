<!DOCTYPE html> 
<html>

<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, intial-scale=1">

<title>Show Education Statistics</title>

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
				<table class="table table-hover">
					<thead>
						<tr class="active">
							<th>Region</th>
							<th>Reading %</th>
							<th>1st Attendence (F)</th>
							<th>1st Attendence (M)</th>
							<th>2nd Attendence (F):</th>
							<th>2nd Attendence (M):</th>
							<th>Latitude</th>
							<th>Longitude</th>
							<th>Link</th>
						</tr>
				<?php
					require_once("db.php");
					
					$sql = "select * from ethiopia limit 15";
					$result = mysqli_query($con,$sql);
					
					if (!$result) {
						die("Invalid query: " . mysql_error());
					}
					// Create CONNECTION
					$conn = new mysqli($hostname, $username, $passwd, $dbname);
					// Check connection
					if ($conn->connect_error) {
					    die("Connection failed: " . $conn->connect_error);
					} 
					
					$sql = "SELECT COL1, COL2, COL3, COL4, COL5, COL6, COL7, COL8, COL9 FROM ethiopia";
					$result = $conn->query($sql);
					
					if ($result->num_rows > 0) {
					    // output data of each row
					    while($row = $result->fetch_assoc()) {
							echo"<tr>";					    	
					        echo "<td>" . $row["COL1"]. "</td>";
					        echo "<td>" . $row["COL2"]. "</td>";
					        echo "<td>" . $row["COL3"]. "</td>";
					        echo "<td>" . $row["COL4"]. "</td>";
					        echo "<td>" . $row["COL5"]. "</td>";
					        echo "<td>" . $row["COL6"]. "</td>";
					        echo "<td>" . $row["COL7"]. "</td>";
					        echo "<td>" . $row["COL8"]. "</td>";
					        echo "<td><a href=" . $row["COL9"]. ">" . $row["COL9"]. " </a></td>";
					        "</tr>";
					    }
					} else {
						echo $result->num_rows;
					    echo "0 results";
					}
					$conn->close();
				?>						
					</thead>
				</table>			
		</div>
	<!--	</div>  -->
		
		
		<footer>
			<p class="text-right">All contents &amp; All rights reserved. &copy; Mohammed Kemal</p>
		</footer>
	</div>
	

</body>
	
</html>