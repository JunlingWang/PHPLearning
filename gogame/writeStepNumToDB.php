 <!DOCTYPE html>
<html>
<head>
<!--File name writeStepNumToDB.php-->
</head>
<body>
<?php


$msg = $_REQUEST["msg"];// receive the parameter n from the JavaScript code
$id = substr($msg,0,5);
$step = substr($msg,5);
$stepNum = (int)$step;
// Make database connection.

$writeComplete = FALSE;
$writeAttemptTime = 1;
while($writeComplete == FALSE && $writeAttemptTime < 1000) {
	$mysqli = new mysqli("localhost", "wangjunling", "ma!XR!04", "gogame");
	// The 4th parameter is the name of the database. It is important to specify
	// the name of the database because there might be several databases under on username.
	if ($mysqli->connect_errno) {
	    echo "DBFailed";
	} else {
		 echo "DBsuccessful";
	}
   
	   $editRow = "UPDATE History SET stepNum = " . $stepNum . ";";
			// Pay attention on the single quotation marks around the double quotation marks
			// around $positionID
		if ($mysqli->query($editRow) === TRUE) {
    				$result = "stepNumWrite successful";
		} else {
	   	$result = "stepNumWriteError";
	   	$writeAttemptTime += 1;
	}
	echo $id . $result;
	$mysqli->close();
}
?>

</body>
</html>
