<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
<?php
$mysqli = new mysqli("localhost", "id302411_jl", "ma.XR.00", "id302411_jl");
$res = $mysqli->query("SELECT id1, name, count FROM table1");
echo "Rows number:" . $res->num_rows . "<br>";
if ($res->num_rows > 0){
    while($row = $res->fetch_assoc()) {
        echo $row["id1"] . $row["name"] . $row["count"] . "<br>";
		if ($row["name"] == "flower") {
			$flowerNumber = $row["count"];
		}// to be quoted by the tag below with an id of "info"
		if ($row["name"] == "tree") {
			$treeNumber = $row["count"];
		}
    }
}else{
echo "No" . "<br>";
}
/*echo "Just test print3" . "<br>";*/
?>
</body>
</html>