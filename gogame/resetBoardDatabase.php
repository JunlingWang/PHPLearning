<!DOCTYPE html>
<!--resetBoardDatabase.php-->
<!--This file is for resetting the board database.-->
<html>
<head>
</head>
<body>
<?php
$boardSize = 19;
// Make database connection.
$mysqli = new mysqli("localhost", "wangjunling", "ma!XR!04", "gogame");
// The 4th parameter is the name of the database. It is important to specify
// the name of the database because there might be several databases under on username.
if ($mysqli->connect_errno) {
    echo "Failed";
} else {
	 echo "InsertDB successful";
}

// Delete all rows from a table
$deleteRow = "DELETE FROM Board";
if ($mysqli->query($deleteRow) === TRUE) {
    echo "delete successful";
} else {
    echo "Error: " . $deleteRow . "<br>" . $mysqli->error;
}

// Add a row into a table.

for ($i = 0; $i < $boardSize; $i++) {
	for ($j = 0; $j < $boardSize; $j++){
		if($i<10) {
			$rowCode = '0'. $i;	
		}else {
			$rowCode = (string) $i;
		}
		if($j<10) {
			$colCode = '0'. $j;	
		}else {
			$colCode = (string) $j;
		}
   $positionID = 'i' . $rowCode . $colCode;
   //echo $positionID;
   
   $addRow = "INSERT INTO Board (PositionID, State, rowNum, colNum)
		VALUES ('" . $positionID . "', 'black', " . $rowCode . ", " . $colCode . ")"; 
		// Pay attention on the single quotation marks around the double quotation marks
		// around $positionID
	if ($mysqli->query($addRow) === TRUE) {
   	$result = "Insert successful";
	} else {
   	$result = "Error: " . $addRow . "<br>" . $mysqli->error;
}
   }
} 

echo $result;




$mysqli->close();
/*
if ($res->num_rows > 0){
while($row = $res->fetch_assoc()) {
	$state = $row["State"];
	echo '19';
}

}else{
echo '18';
}
*/

?>

</body>
</html>
