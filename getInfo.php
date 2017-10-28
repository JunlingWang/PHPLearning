<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
<?php
/*
echo "opdb called."
echo "opdb called."
*/
$mysqli = new mysqli("localhost", "id302411_jl", "ma.XR.00", "id302411_jl");
$res = $mysqli->query("SELECT id1, name, count FROM table1 WHERE id1=1");
if ($res->num_rows > 0){
    while($row = $res->fetch_assoc()) {
       $count = $row["count"];
	   echo $count;
    }
}else{
echo "No" . "<br>";
}
?>
</body>
</html>