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
    echo "Failed";
} else {
	 echo "DB success";
}
//echo $mysqli->host_info . "\n";
$res = $mysqli->query("SELECT * FROM Board");
if ($res->num_rows > 0){
    while($row = $res->fetch_assoc()) {
       echo $row['State'];
       echo "yes";
    }
}else{
echo "No";
}

$mysqli->close(); // Close the database connection.
?>
<?php

// echo "opdb called."

/*
$mysqli = new mysqli("localhost", "id302411_jl", "ma.XR.00", "id302411_jl");
$res = $mysqli->query("SELECT id1, name, count FROM table1 WHERE id1=1");
if ($res->num_rows > 0){
    while($row = $res->fetch_assoc()) {
       $count = $row["count"];
	$count += 1;
	$mysqli->query("UPDATE table1 SET count=$count WHERE id1=1");
	echo $count;
    }
}else{
echo "No" . "<br>";
}*/
?>
</body>
</html>
