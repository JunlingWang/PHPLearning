 <!DOCTYPE html>
<html>
<head>
</head>
<body>
<?php


$msg = $_REQUEST["msg"];// receive the parameter n from the JavaScript code
$id = substr($msg,0,5);
$state = substr($msg,5);
// Make database connection.
$mysqli = new mysqli("localhost", "id302411_jlw", "ap.PG.00", "id302411_gogame");
// The 4th parameter is the name of the database. It is important to specify
// the name of the database because there might be several databases under on username.
if ($mysqli->connect_errno) {
    echo "Failed";
} else {
	 echo "successful";
}
   
   $editRow = "UPDATE Board SET State = '" . $state . "' WHERE PositionID = '" . $id . "';";
		// Pay attention on the single quotation marks around the double quotation marks
		// around $positionID
	if ($mysqli->query($editRow) === TRUE) {
   	$result = "Insert successful";
	} else {
   	$result = "Error: " . $editRow . "<br>" . $mysqli->error;
}

echo $id;

$mysqli->close();
?>

</body>
</html>
