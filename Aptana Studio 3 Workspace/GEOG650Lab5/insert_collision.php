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