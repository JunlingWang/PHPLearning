
tableSize = 19; // Global variable, whose default value is 19

function clearBoard(){
    document.getElementById("clear").innerHTML = "It works";
    resetBoardDatabase();
}

function testButton() {
	makeAMove(0,6);
}

function databaseTest(){
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
                document.getElementById("testResult").innerHTML = this.responseText;
            }
	};  
	//calls the opdb.php file, which is in the save server folder.
	xmlhttp.open("GET", "opdb.php", true);
	xmlhttp.send();
}

/*Functions inside this function will be called when the window is opened*/
function startPage() {
	 injectTableCode();/*Create the Go game board*/
    fitSize();/*Fit the container of the Go game board fit the size of the window*/
    editGrid();
    // The order of these functions are important. You can't operate on code that hasn't been generated.
}

/*BOARD TABLE GENERATING CODE****************************************************
*The board of the Go game is built with an html table, but 
*the html code of the table is too long to be hand written.
*So he following piece of JavaScript code is used to generate the html of the board table 
*and then send it to the table <body> element in . 
*/    

function injectTableCode() {
	document.getElementById("boardTableBody").innerHTML = createTableCode();
}   

function createTableCode() {
	var tableHtmlCode = "";
	var rowHtmlCode = "";
	
  //The first layer of loop is for rows and the 2nd layer is for columns.
	for (i = 0; i < tableSize; i++) {
			rowHtmlCode = "";
		for (j = 0; j < tableSize; j++) { // Different indexes (like i,j,k) should be used in multi-layer loops.
			rowHtmlCode += creatTdElement(i,j);
   	}  
		rowHtmlCode = "<tr>" + rowHtmlCode + "</tr>";		
		tableHtmlCode += rowHtmlCode;
   }  
return tableHtmlCode;
}

//The row number and the column number are encoded into the html code.
function creatTdElement(rowNum,colNum) {
	var tdId = createTdId(rowNum,colNum); 
	var divId = tdId + 'd'; 
	var tdElmentCode = '<td class="tdElement" id="' + tdId + '" onclick="onClick(this.id)"><div id="' + divId + '"></div></td>';
	return tdElmentCode;
}

function createTdId(row,col) {
		var rowString = row.toString();
	if (row<10) { // Keep the string two-digit
		rowString = "0" + rowString;
	}
	var colString = col.toString();
	if (col<10) { // Keep the string two-digit
		colString = "0" + colString;
	}
	var tdId = 'i' + rowString + colString; /*Create a string like 'i0102'*/
	return tdId;
}

//Keep the table cell "frame1" square all the time and fit the size of the window.
//When the size of this cell is adjusted, the cell to the right of it and even the
//whole table's size will be adjusted accordingly.
function fitSize()
            {
                var heights = window.innerHeight;
                squareSide = heights + "px";
                document.getElementById("frame1").style.height = squareSide;
                document.getElementById("frame1").style.width = squareSide;
                document.getElementById("i0000d").style.height = document.getElementById("i0000d").style.width;
                //The third line doesn't work.
            }
            
function editGrid() {
	for (i = 0; i < tableSize; i++) {
		for (j = 0; j < tableSize; j++) { // Different indexes (like i,j,k) should be used in multi-layer loops.
			var positionID = createTdId(i,j); 
			var posCode = generatePosCode([i,j]);
			if (posCode != 'middle') {
				document.getElementById(positionID).style.backgroundImage = 'url("img/' + posCode + 'empty.png")';
			}

   	}

	}
}  

// Generate a part of the image code according to the ID,
// because in different position the background of the picture is different.
function generatePosCode(positionArry=[0,0]) { 
			var posCode = 'middle';
			var rowNum = positionArry[0]; 
			var colNum = positionArry[1]; 
			if (rowNum==0 && colNum==0) {
				posCode = 'LT';
   		} else if (rowNum==0 && colNum==tableSize-1) {
   			posCode = 'RT';
   		} else if (rowNum==tableSize-1 && colNum==0) {
   			posCode = 'LB';
   		} else if (rowNum==tableSize-1 && colNum==tableSize-1) {
   			posCode = 'RB';
   		} else if (rowNum==0) {
   			posCode = 'TE';
   		} else if (rowNum==tableSize-1) {
   			posCode = 'BE';
   		} else if (colNum==0) {
   			posCode = 'LE';
			} else if (colNum==tableSize-1) {
				posCode = 'RE';
			} else if ((rowNum==3 || rowNum==(tableSize-1)/2 || rowNum==tableSize-4) && (colNum==3 || colNum==(tableSize-1)/2 || colNum==tableSize-4)) {
				posCode = 'dot';
			}
			return posCode;
} 

window.onresize = function() {  /*this function is called when the window is resized*/
                fitSize();
            };
/*BOARD TABLE GENERATING CODE ENDS****************************************************/

/* CODE FOR THE MOVES*****************************************************************
* This piece of code realizes and controls the Go game moves,
* basically putting stones to and removing them from the board.
*/
function onClick(clickedID) {
	id = clickedID;
	rowNum = Number(id.substring(1, 3)); //i0000
	colNum = Number(id.substring(3)); ; //i0000
	makeAMove(rowNum,colNum);
}

function changeLocalState(positionArray=[0,0],resultState='empty') { 
	var positionID = createTdId(positionArray[0],positionArray[1]); 
	var posCode = generatePosCode(positionArray); 
	document.getElementById(positionID).style.backgroundImage = 'url("img/' + posCode + resultState + '.png")';
}

function resetBoardDatabase() {
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
                document.getElementById("testResult").innerHTML = this.responseText;
            }
	};  
	//calls the opdb.php file, which is in the save server folder.
	xmlhttp.open("GET", "resetBoardDatabase.php", true);
	xmlhttp.send();
}

function updatePosition(rowNum, colNum) {
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
               var res = this.responseText;
               var resStr = res.toString(); 
               if (resStr.includes("black")){
               	state = "black";
               } else if (resStr.includes("white")) {
               	state = "white";
               } else {
               	state = "empty";
               }
               document.getElementById("testResult").innerHTML = resStr;
               changeLocalState([rowNum, colNum], state);
            }
	};  
	var id = createTdId(rowNum, colNum)
	//calls the opdb.php file, which is in the save server folder.
	xmlhttp.open("GET", "updatePosition.php?id=" + id, true);
	xmlhttp.send();
}

function updateWholeBoard() {
	for (i = 0; i < tableSize; i++) {
		for (j = 0; j < tableSize; j++) { // Different indexes (like i,j,k) should be used in multi-layer loops.
			updatePosition(i, j);
			
   	}

	}
}

function makeAMove(rowNum,colNum) {

	var stepNum = Number(getStepNum());
	var colorOfThisStep = "black";
	if (stepNum % 2 == 0) {
		colorOfThisStep = "black";
	} else {
		colorOfThisStep = "white";
	}
	writeToDB(rowNum,colNum,colorOfThisStep);
	stepNum += 1;
	writeToDB(rowNum,colNum,stepNum);
	updatePosition(rowNum, colNum);
	//readFromStepNum();
}

function writeToDB(rowNum,colNum, info) {
	var id = createTdId(rowNum, colNum);
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
       document.getElementById("testResult").innerHTML = id + this.responseText;
            }
	};  
	if (typeof info == "string") {
		var state = info;
		xmlhttp.open("GET", "writeToDB.php?msg=" + id + state, true);
	}else if (typeof info == "number") {
		var stepNum = info;
		xmlhttp.open("GET", "writeStepNumToDB.php?msg=" + id + stepNum, true);	
	}
	//calls the opdb.php file, which is in the save server folder.
	xmlhttp.send();
}

function readFromStepNum() 
	{
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
		         var resString = this.responseText;
		      	document.getElementById("stepNum").innerHTML = "400";//resString.trim();
   				//var res = 123;//this.responseText;
            }
			};
	//calls the opdb.php file, which is in the save server folder.
	xmlhttp.open("GET", "readFromStepNum.php", true);
	xmlhttp.send();
	}
	
function getStepNum() {
var num = document.getElementById("stepNum").innerText;
return num;
};
/*END OF THE CODE FOR THE MOVES******************************************************/


 
        