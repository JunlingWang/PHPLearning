
tableSize = 19; // Global variable, whose default value is 19

function panelWork() {
    document.getElementById("demo").innerHTML = "It works";
}

/*Functions inside this function will be called when the window is opened*/
function startPage() {
	 injectTableCode();/*Create the Go game board*/
    fitSize();/*Fit the container of the Go game board fit the size of the window*/
    editGrid();
    // The order of these functions are important. You can't operate on code that hasn't been generated.
}

/*Keep the table cell "frame1" square all the time and fit the size of the window.
*When the size of this cell is adjusted, the cell to the right of it and even the
*whole table's size will be adjusted accordingly.
*/
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
			var tdId = createTdId(i,j); 
			if (i==0 && j==0) {
					document.getElementById(tdId).style.backgroundImage = 'url("img/LT.png")';
   		} else if (i==0 && j==tableSize-1) {
					document.getElementById(tdId).style.backgroundImage = 'url("img/RT.png")';
   		} else if (i==tableSize-1 && j==0) {
					document.getElementById(tdId).style.backgroundImage = 'url("img/LB.png")';
   		} else if (i==tableSize-1 && j==tableSize-1) {
					document.getElementById(tdId).style.backgroundImage = 'url("img/RB.png")';
   		} else if (i==0) {
					document.getElementById(tdId).style.backgroundImage = 'url("img/TE.png")';
   		} else if (i==tableSize-1) {
					document.getElementById(tdId).style.backgroundImage = 'url("img/BE.png")';
   		} else if (j==0) {
					document.getElementById(tdId).style.backgroundImage = 'url("img/LE.png")';
			} else if (j==tableSize-1) {
					document.getElementById(tdId).style.backgroundImage = 'url("img/RE.png")';
			} else if ((i==3 || i==(tableSize-1)/2 || i==tableSize-4) && (j==3 || j==(tableSize-1)/2 || j==tableSize-4)) {
					document.getElementById(tdId).style.backgroundImage = 'url("img/dot.png")';
			}
   	}

	}
}            
window.onresize = function() {  /*this function is called when the window is resized*/
                fitSize();
            };
            
function injectTableCode() {
	document.getElementById("test").innerHTML = createTableCode();
}
	 
/*BOARD TABLE GENERATING CODE****************************************************
*The board of the Go game is built with an html table, but 
*the html code of the table is too long to be hand written.
*So he following piece of JavaScript code is used to generate the html of the board table 
*and then send it to the table <body> element in . 
*/       
/*rowNum=0, colNum=0*/

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
/*BOARD TABLE GENERATING CODE ENDS****************************************************/



 
        