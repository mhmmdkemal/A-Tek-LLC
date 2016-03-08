<?php

	$hostname = "129.2.24.163";
	$username = "mkemal1";
	$passwd = "mkemal1";
	$dbname = "mkemal1";
	
try{
	$db_conn = new mysqli($hostname, $username, $passwd, $dbname);
}
catch (Exception $e){
	echo $e.getMessage();
}


?>