<!DOCTYPE html>
<!--resetBoardDatabase.php-->
<!--This file is for resetting the board database.-->
<html>
<head>
</head>
<body>
<?php
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
   	 echo "Failed";
	} else {
		 echo "DB for update successful";
	}
		$res = $mysqli->query("SELECT * FROM Board");
		if ($res->num_rows > 0){
    		while($row = $res->fetch_assoc()) {
    			//NOT FINISHED
       		//echo $row['State'];
       		//$updateComplete = TRUE;
    		}
		}else{
		echo "No" . $updatAttemptTime;
		$updatAttemptTime += 1;
	}
	$mysqli->close();
}





?>

</body>
</html>
