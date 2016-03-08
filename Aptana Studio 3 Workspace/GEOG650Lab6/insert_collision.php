<?php

include("db.php");

try{
	$species1 = $_REQUEST['species'];
	$species2 = $_REQUEST['txtSpecies'];
	
	if($species1 === "Other")
		$species1 = $species2;
	
	$gender = $_REQUEST['rbGender'];
	$age = $_REQUEST['rbAge'];
	$date = $_REQUEST['rdate'];
	$latitude = $_REQUEST['lat'];
	$longitude = $_REQUEST['lng'];
	$location = $_REQUEST['address'];
	
	$table = "mobile";
	
	$sql = "insert $table (species, gender, age, report_date,
	latitude, longitude, location)
	values ('$species1', '$gender', '$age', '$date',
	'$latitude', '$longitude', '$location')";
	
	$result = mysqli_query($db_conn, $sql);
	
	if ($result == 1){
		echo "Successfully inserted :) ";
	} else{
		echo "Failed to insert :(";
	}
}catch(Exception $e){
	echo $e.getMessage();
} 
?>