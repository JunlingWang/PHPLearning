//Javascript code to responde to the button onClick event.
function onClick() {
document.getElementById("hello").innerHTML = "Hello JavaScript!";
var opOfTop = document.getElementById("a1t");
if(opOfTop.style.opacity == "0"){
    opOfTop.style.opacity = "1";	
}else{
    opOfTop.style.opacity = "0";	
}

//document.getElementById("a1t").style.backgroundImage = "url('bgi2.jpg')";//change the background image of the cell
var btnProperty = document.getElementById("stone");

if (btnProperty.style.backgroundColor != "blue") { 
    btnProperty.style.backgroundColor = "blue";
}else{
    btnProperty.style.backgroundColor = "red";
}
if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
		//html tag with id "info" is set as target of this function
                document.getElementById("info").innerHTML = this.responseText;
            }
	};  
	//calls the opdb.php file, which is in the save server folder.
	xmlhttp.open("GET", "opdb.php", true);
	xmlhttp.send();
}

function onInput(str) {
if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
		//html tag with id "info" is set as target of this function
            }
	};  
	//calls the opdb.php file, which is in the same server folder.
	xmlhttp.open("GET", "inputTable.php?n=" + str, true);//pass str to the php file
	xmlhttp.send();
	//if (str.length > 0) { 
    //    document.getElementById("hello").innerHTML = str;
    //}
}

var myVar;

// This function is called when the page is loaded
function stopWatch() {
	//setInterval is a function that repeat an operation in a specified interval(in milliseconds).
    myVar = setInterval(getRandom, 250);
	myVar = setInterval(getDate, 250);
	myVar = setInterval(getData, 1000);
	myVar = setInterval(getInfo, 1000);

}

function getRandom() {
	var x = Math.floor((Math.random() * 9) + 1);
	var str = x.toString();
	document.getElementById("watch").innerHTML = str;
}

// This function is called by stopWatch(), which is called when the page is loaded.
function getDate() {
	if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
		//html tag with id "info" is set as target of this function
                document.getElementById("date").innerHTML = this.responseText; // the text content to be showed
            }
	};  
	//calls the getDate.php file, which is in the same server folder.
	xmlhttp.open("GET", "getDate.php", true);
	xmlhttp.send();
}

function getData() {
	if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
		//html tag with id "info" is set as target of this function
                document.getElementById("data").innerHTML = this.responseText;
            }
	};  
	//calls the getData.php file, which is in the same server folder.
	xmlhttp.open("GET", "getData.php", true);
	xmlhttp.send();
}

function getInfo() {
	if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
		//html tag with id "info" is set as target of this function
                document.getElementById("info").innerHTML = this.responseText;
            }
	};  
	//calls the opdb.php file, which is in the save server folder.
	xmlhttp.open("GET", "getInfo.php", true);
	xmlhttp.send();
}

window.onload = stopWatch;
