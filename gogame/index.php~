<!--
Go Game
Detailed documentation is at the end of this file
-->
<!-- -->
<!DOCTYPE html>
<html>
<head>
<title> Go Game </title>
<!--import JavaScript file-->
<script type="text/javascript" src="script.js"></script>

<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body onload="startPage()"> <!--When the page is loaded, call this JS function-->

<!--This element is to take the height of the window, so as to
 *vertically align the board-->
<table id="frame">
  <tbody>
        <tr>
        <td id="frame1">

<table id="board">
  <tbody id="boardTableBody">
  <!--Table code is injected here.-->
  </tbody>
</table>

        </td>
        <td id="frame2"><!--This is the container of the control panel-->
<div id="controlPanel">
<h1>控制台</h1>
<p id="demo">Control Panel</p>
<button type="button" onclick="panelWork();">Try it</button>
<p id="testResult">Test result</p>
<button type="button" onclick="testButton();">Test Button</button>
</div>     
        </td>
        </tr>
  </tbody>
</table>

<!--make database connection-->

</body>
</html>


<!--
PHP代码是运行在服务器端的，html和Javascript是运行在客户端的。
当浏览器访问一个服务器端的.php文件时，文件中的php代码会被服务器
执行，并生成html代码。而Javascript代码不会被服务器执行，会被和html
代码一起原样发到客户端电脑，然后被客户电脑的浏览器执行。
对数据库的操作可以由php完成，并可以把获得的数据以html的形式
发给客户端浏览器。
php不仅可以读取数据库，也可以对数据库进行修改、写入操作。
要用户在浏览器端的操作（点击、输入等）编辑数据库，需要采用
AJAX技术。首先用html事件调用Javascript函数，后者再调用php文件操作
数据库。php在除了操作数据库以外，还可以把获取的数据发送到Javascript
指定的html标签中。

PHP code runs on the server side, while html and Javascript run
 on the client side. When a browser visits a .php file on a 
 server, the php code in the file will be executed by the server,
 and the server will generate html code accordingly.
 
 However, Javascript code will not be processed by the server. It 
 will be send to the client end together with the html code, and then
  be executed by the browser.
  
 The operation of database can be done by PHP, and the result data
 can be sent to client end in a form of html.
 
HPH can be used not only to read the database, but also the writing
 and revising of it.
 
 If you want to operate the database via the browser, 
 such as by clicking and inputing data, AJAX is needed. Firstly,
 call Javascript functions with html events, such as a button click,
 and then the Javascript function calls php function to operate the
 database. The php function can then send the result data to a html
 mark specified by Javascript.
-->
