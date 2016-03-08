<?php

	$hostname = "localhost";
	$username = "root";
	$passwd = "root";
	$dbname = "mkemal1";
	
	$con = mysqli_connect($hostname, $username, $passwd,$dbname);
	if(!$con)
			die("Database connection error" . mysql_error());
	
	$db = mysqli_select_db($con, $dbname);
	if(!$db)
			die("Database selection failed" . mysql_error());

?>