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
$writeComplete = FALSE;
$writeAttemptTime = 1;
// This loop is to guarantee 100% writing success.
// It keeps running until it's successful or reaches 50 times, which is enough.
while($writeComplete == FALSE && $writeAttemptTime < 50) {
	$mysqli = new mysqli("localhost", "wangjunling", "ma!XR!04", "gogame");
	// The 4th parameter is the name of the database. It is important to specify
	// the name of the database because there might be several databases under on username.
	if ($mysqli->connect_errno) {
	    echo "DBFailed";
	} else {
		 echo "DBsuccessful";
	}
	   $editRow = "UPDATE Board SET State = '" . $state . "' WHERE PositionID = '" . $id . "';";
			// Pay attention on the single quotation marks around the double quotation marks
			// around $positionID
		if ($mysqli->query($editRow) === TRUE) {
			$checkState = "check";
			$checkRes = $mysqli->query("SELECT State FROM Board WHERE PositionID='".$id."'");
			if ($checkRes->num_rows > 0){
    			while($row = $res->fetch_assoc()) {
    				if($check == $state) { // Check if writing is successful.
    				$writeComplete = TRUE; // If it is, end the loop.
    				$result = "Edit successful"; // for test
					}else {
			   		$result = "Edit Error1"; // for test
	   				$writeAttemptTime += 1;	
					}
			  	}
			 }else{
    			$result = "Edit Error2"; // for test
	   		$writeAttemptTime += 1;	// to avoid infinite loop	
			}
		}
echo $id . $result;
$mysqli->close();
}
?>

</body>
</html>
