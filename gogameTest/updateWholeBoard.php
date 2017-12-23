<!DOCTYPE html>
<html>
<head>
</head>
<body>
<?php
$boardSize = 18;
$updateComplete = FALSE;
$updatAttemptTime = 1;
// This loop is to guarantee that if the database visit fails,
// it will be revisit again, until it's successful
// $updateComplete will be changed to TRUE when it's successful and the loop ends
// The arguement $updatAttemptTime < 1000 is used to avoid infinite loop, usually it will be smaller than 20.
while($updateComplete == FALSE && $updatAttemptTime < 1000) {
	$mysqli = new mysqli("localhost", "wangjunling", "ma!XR!04", "gogame");
	// The 4th parameter is the name of the database. It is important to specify
	// the name of the database because there might be several databases under on username.

	if ($mysqli->connect_errno) {
		echo "No" . $updatAttemptTime;
		$updatAttemptTime += 1;
	} else {
		$updateComplete = TRUE;
	}
	$msgStr = '';
	for ($i = 0; $i <= $boardSize; $i++) {
		for ($j = 0; $j <= $boardSize; $j++) {
			$id = createID($i,$j);
			$res = $mysqli->query("SELECT * FROM Board WHERE PositionID='".$id."'");
			if ($res->num_rows > 0){
    			while($row = $res->fetch_assoc()) {
       			$posInfo = $id.(string)$row['State']; // Form the position msg
       			$msgStr .= $posInfo; // Append the position msg
    			}
			}
		}
	} 
	echo $msgStr; // This is a string with information of all the occupied positions
	$mysqli->close();
}

/*Create ID string from row and column numbers*/
function createID($rowNum,$colNum) {
	if($rowNum<10) {
		$rowStr = '0'.(string)$rowNum;
	}else {
		$rowStr = (string)$rowNum;	
	}
	if($colNum<10) {
		$colStr = '0'.(string)$colNum;
	}else {
		$colStr = (string)$colNum;	
	}
	$id = 'i'.$rowStr.$colStr;
	return $id;
} 
?>

</body>
</html>
