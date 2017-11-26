
function panelWork() {
    document.getElementById("demo").innerHTML = "It works";
}

function startPage() {
    fitSize();
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
            }
            
window.onresize = function() {  /*this function is called when the window is resized*/
                fitSize();
            };