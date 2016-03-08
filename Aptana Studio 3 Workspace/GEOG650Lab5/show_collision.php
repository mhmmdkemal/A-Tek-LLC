
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
