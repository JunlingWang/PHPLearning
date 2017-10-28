<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
<?php
$n = $_REQUEST["n"];// receive the parameter n from the JavaScript code
$count = (int)$n;
$mysqli = new mysqli("localhost", "id302411_jl", "ma.XR.00", "id302411_jl");
$res = $mysqli->query("SELECT id1, name, count FROM table1 WHERE id1=2");
if ($res->num_rows > 0){
    while($row = $res->fetch_assoc()) {
	$mysqli->query("UPDATE table1 SET count=$count WHERE id1=2");//update database
	echo $count;// this doesn't really work because the JavaScript method doesn't use his parameter
    }
}else{
echo "No" . "<br>";
}
//echo $n . "<br>";

?>
</body>
</html>