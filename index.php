<!--
PHP代码是运行在服务器端的，html和Javascript是运行在客户端的。
当浏览器访问一个服务器端的.php文件时，文件中的php代码会被服务器
执行，并生成html代码。而Javascript代码不会被服务器执行，会被和html
代码一起原样发到客户端电脑，然后被客户电脑的浏览器执行。
对数据库的操作可以由php完成，并可以把获得的数据以html的形式
发给客户端浏览器。
php不仅可以读取数据库，也可以对数据库进行修改、写入操作。
要用户在浏览器端的操作（点击、输入等）编辑数据库，需要采用
AJAX技术。首先用html事件调用Javascrip函数，后者再调用php文件操作
数据库。php在除了操作数据库以外，还可以把获取的数据发送到Javascript
指定的html标签中。
-->

<?php
$userName = "WJL";
?>

<html>

<head>
<title> Learn PHP </title>
<!--import JavaScript file-->
<script type="text/javascript" src="script.js"></script>
<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>

<!--display the first line's text-->
<p id="hello"> <?php echo "Hello World! " . $userName; ?> </p>

<!--make database connection-->
<p> 
<?php
$mysqli = new mysqli("localhost", "id302411_jl", "ma.XR.00", "id302411_jl");
if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
echo $mysqli->host_info . "\n";
?>
</p>

<!--display date，the function is in getDate.php, and is called by script.js-->
<p>
Today's date: 
<div id = "date"></div>
</p>

<!--database query，the function is in getData.php, and is called by script.js-->
<p>
<div id="data"></div>
</p>
<!-- the following tags are the button and the field to be monitored Javascript-->
<table width="300" border="1">
  <tbody>
    <tr>
      <td ><button class="stone" id="stone" onclick="onClick()"></button> </td>
      <td>Number of flowers</td>
      <td><div id="info"><b><?php echo $flowerNumber ?></b></div><!--display current number in the database--></td>
    </tr>
  </tbody>
</table>

<form action="">
<table width="300" border="1">
  <tbody>
    <tr>
      <td><p>Number of trees</p></td>
      <td><div ><b><input id="tree" type="text" name="LastName" onkeyup="onInput(this.value)" value=<?php echo $treeNumber ?>></b></div></td>
      <!-- this input field gets database data through $treeNumber and pass new input data to JavaScript file through onkeyup value-->
    </tr>
  </tbody>
</table>
</form>

<table width="300" border="1">
  <tbody>
    <tr>
      <td><div><p id="watch">0</p></div></td>
      <!-- this input field gets database data through $treeNumber and pass new input data to JavaScript file through onkeyup value-->
    </tr>
  </tbody>
</table>

<table id="board" width="300">
  <tbody>
    <tr>
      <td id="a1" onclick="onClick()"><div id="a1t"></div></td>
      <td id="te" onclick="onClick()"><div id="a2t"></div></td>
      <td id="a3" onclick="onClick()"><div id="a3t"></div></td>
    </tr>
    <tr>
      <td id="le" onclick="onClick()"><div id="b1t"></div></td>
      <td id="middle" onclick="onClick()"><div id="b2t"></div></td>
      <td id="re" onclick="onClick()"><div id="b3t"></div></td>
    </tr>
    <tr>
      <td id="c1" onclick="onClick()"><div id="c1t"></div></td>
      <td id="be" onclick="onClick()"><div id="c2t"></div></td>
      <td id="c3" onclick="onClick()"><div id="c3t"></div></td>
    </tr>
  </tbody>
</table>
</body>
</html>