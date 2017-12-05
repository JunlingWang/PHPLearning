 <!DOCTYPE html>
<html>
<head>
</head>
<body>
<?php
	$mysqli = new mysqli("localhost", "wangjunling", "ma!XR!04", "gogame");
	// The 4th parameter is the name of the database. It is important to specify
	// the name of the database because there might be several databases under on username.
	if ($mysqli->connect_errno) {
	    echo "DBFailed";
	} else {
		 echo "DBsuccessful";
	}
	   $editRow = "UPDATE Board SET State = 'empty';";
			// Pay attention on the single quotation marks around the double quotation marks
			// around $positionID
		if ($mysqli->query($editRow) === TRUE) {
			echo "Empty";
		}
	$mysqli->close();
?>

</body>
</html>
