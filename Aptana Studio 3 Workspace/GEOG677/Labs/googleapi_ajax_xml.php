<?php
require("db.php");

// Start XML file, create parent node


$dom = new DOMDocument("1.0");
$node = $dom->createElement("markers");
$parnode = $dom->appendChild($node);

$query = "SELECT * FROM oil";
$result = mysqli_query($db_conn, $query);
if (!$result) {
  die('Invalid query: ' . mysqli_error($db_conn));
}

header("Content-type: text/xml");


// Iterate through the rows, adding XML nodes for each
while ($row = mysqli_fetch_array($result)){
  $node = $dom->createElement("marker");
  $newnode = $parnode->appendChild($node);
  $newnode->setAttribute("name",$row['name']);
  $newnode->setAttribute("address", $row['location']);
  $newnode->setAttribute("lat", $row['latitude']);
  $newnode->setAttribute("lng", $row['longitude']);
  $newnode->setAttribute("txtDesc", $row['description']);  
  $newnode->setAttribute("conf", $row['conf']);
}
echo $dom->saveXML();

?>