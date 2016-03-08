<?php
include("db.php");

try{
	$table = "mobile";
	$sql = "select * from $table order by id desc limit 10";
	$result = mysqli_query($db_conn, $sql);
	
	while ($row = mysqli_fetch_array($result)) {
		echo "<li>" . $row["species"] . "<br/> Gender : " . $row["gender"] . "<br/> Age Class : " . $row["age"] . "<br/> Date : " . $row["report_date"] . "<br/> Latitude : " 
		. $row["latitude"] . "<br/> Longitude : " . $row["longitude"] . "<br/> Address : " . $row["location"] . "</li>";
	}
}catch(Exception $e){
	echo $e.getMessage();
}
?>