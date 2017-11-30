
tableSize = 19; // Global variable, whose default value is 19
stepNum = 0; // When the game begins, the step number is zero.

function panelWork() {
    document.getElementById("demo").innerHTML = "It works";
    updateLocalState([0,0],"white");
}

function testButton() {
	databaseTest();
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
	var tdElmentCode = '<td class="tdElement" id="' + tdId + '" onclick="onClick()"><div id="' + divId + '"></div></td>';
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
function updateLocalState(positionArray=[0,0],resultState='empty') { 
	var positionID = createTdId(positionArray[0],positionArray[1]); 
	var posCode = generatePosCode(positionArray); 
	document.getElementById(positionID).style.backgroundImage = 'url("img/' + posCode + resultState + '.png")';
}


/*END OF THE CODE FOR THE MOVES******************************************************/
 
        