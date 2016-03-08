<?php

require("db.php");

// Start XML file, create parent node

$dom = new DOMDocument("1.0");
$node = $dom->createElement("markers");
$parnode = $dom->appendChild($node);

// Select all the rows in the markers table

$query = "SELECT * FROM ethiopia";
$result = mysqli_query($con, $query);
if (!$result) {
  die('Invalid query: ' . mysqli_error($con));
}

header("Content-type: text/xml");

// Iterate through the rows, adding XML nodes for each

while ($row = mysqli_fetch_array($result)){
  // ADD TO XML DOCUMENT NODE
  $node = $dom->createElement("marker");
  $newnode = $parnode->appendChild($node);
  $newnode->setAttribute("name",$row['COL1']);
  $newnode->setAttribute("address", $row['COL9']);
  $newnode->setAttribute("lat", $row['COL7']);
  $newnode->setAttribute("lng", $row['COL8']);
  $newnode->setAttribute("type", $row['COL1']);
}

echo $dom->saveXML();

?>