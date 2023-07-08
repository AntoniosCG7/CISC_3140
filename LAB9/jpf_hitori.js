"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Review Assignment

   Author: Antonios Chatzinikolas Georgas
   Date:   7/4/2023

   Global Variables
   ================
   
   allCells
      References the TD cells within the Hitori table grid.   
      
   Function List
   =============

   startUp()
      Run when the web page is loaded; displays puzzle 1
      and loads the event handlers for the web page buttons.
      
   setupPuzzle()
      Sets up a new puzzle, adding the event handlers for
      every puzzle cell.      

   switchPuzzle(e)
      Swaps one puzzle for another based on the button being clicked
      by the user. Confirms the change before swapping in the
      new puzzle.

   findErrors()
      Highlights the errors in the Hitori puzzle in a red font.
      
   showSolution()
      Shows the solution to the Hitori puzzle
    
   checkSolution()
      Checks the current user's puzzle to verify whether it contains
      the complete and correct solution.

   drawHitori(numbers, blocks, rating)
      Returns a text string of the HTML code to
      display a Hitori puzzle table based on the contents of
      the numbers, blocks, and rating parameters.
	
*/

// Declare the global allCells variable to store an array of puzzle cells
var allCells;

// Run the startUp() function when the page is loaded by the browser
window.onload = startUp;

// Define the startUp() function
function startUp() {
  // Change the inner HTML of the element with the ID "puzzleTitle" to "Puzzle 1"
  document.getElementById("puzzleTitle").innerHTML = "Puzzle 1";

  //  Call the drawHitori() function with hitori1 Numbers, Blocks, and Rating variables
  //  and store the returned HTML code in the inner HTML of the element with the ID "puzzle"
  document.getElementById("puzzle").innerHTML = drawHitori(
    hitori1Numbers,
    hitori1Blocks,
    hitori1Rating
  );

  // Add event handlers to puzzle buttons to run the switchPuzzle() function when clicked
  var puzzleButtons = document.getElementsByClassName("puzzles");
  for (var i = 0; i < puzzleButtons.length; i++) {
    puzzleButtons[i].onclick = switchPuzzle;
  }

  // Call the setupPuzzle() function to define the initial appearance of the first puzzle
  setupPuzzle();

  // Add an event handler to the "Check Solution" button to run the findErrors() function when clicked
  document.getElementById("check").onclick = findErrors;

  // Add an event handler to the "Show Solution" button to run the showSolution() function when clicked
  document.getElementById("solve").onclick = showSolution;
}

function setupPuzzle() {
  // Add event handlers for every puzzle cell
  allCells = document.getElementsByTagName("td");
  for (var i = 0; i < allCells.length; i++) {
    allCells[i].onclick = changeColor;
  }
}

function switchPuzzle(e) {
  // Confirm the puzzle change before swapping in the new puzzle
  if (confirm("You will lose all your work on the puzzle! Continue?")) {
    // Get the clicked button's ID to determine the puzzle ID
    var puzzleID = e.target.id;

    // Change the puzzle title
    document.getElementById("puzzleTitle").innerHTML = e.target.value;

    // Create a switch-case structure to load the appropriate HTML code for each puzzle
    switch (puzzleID) {
      case "puzzle1":
        document.getElementById("puzzle").innerHTML = drawHitori(
          hitori1Numbers,
          hitori1Blocks,
          hitori1Rating
        );
        break;
      case "puzzle2":
        document.getElementById("puzzle").innerHTML = drawHitori(
          hitori2Numbers,
          hitori2Blocks,
          hitori2Rating
        );
        break;
      case "puzzle3":
        document.getElementById("puzzle").innerHTML = drawHitori(
          hitori3Numbers,
          hitori3Blocks,
          hitori3Rating
        );
        break;
    }

    // Reset the puzzle setup
    setupPuzzle();
  }
}

function setupPuzzle() {
  // Use the querySelectorAll() method to create an object collection of all td elements within the hitoriGrid table and save it in the allCells variable
  allCells = document.querySelectorAll("#hitoriGrid td");

  // Loop through the allCells object collection and change the style of each cell
  for (var i = 0; i < allCells.length; i++) {
    allCells[i].style.backgroundColor = "white";
    allCells[i].style.color = "black";
    allCells[i].style.borderRadius = "0";
  }

  // Add event listeners for mousedown events on each cell in allCells
  for (var i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener("mousedown", function (event) {
      if (event.shiftKey) {
        // If Shift key is pressed, change cell appearance
        this.style.backgroundColor = "white";
        this.style.color = "black";
        this.style.borderRadius = "0";
      } else if (event.altKey) {
        // If Alt key is pressed, change cell appearance
        this.style.backgroundColor = "black";
        this.style.color = "white";
        this.style.borderRadius = "0";
      } else {
        // Otherwise, change cell appearance
        this.style.backgroundColor = "rgb(101, 101, 101)";
        this.style.color = "white";
        this.style.borderRadius = "50%";
      }

      // Prevent default action of selecting text in table cells
      event.preventDefault();
    });
  }

  // Add mouseover event listeners for each cell to change mouse cursor
  for (var i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener("mouseover", function (event) {
      if (event.shiftKey) {
        // If Shift key is pressed, change cursor
        this.style.cursor = "url(jpf_eraser.png), alias";
      } else if (event.altKey) {
        // If Alt key is pressed, change cursor
        this.style.cursor = "url(jpf_block.png), cell";
      } else {
        // Otherwise, change cursor
        this.style.cursor = "url(jpf_circle.png), pointer";
      }
    });
  }

  // Add event listener for checkSolution() on mouseup event to test if the puzzle is solved
  for (var i = 0; i < allCells.length; i++) {
    allCells[i].addEventListener("mouseup", checkSolution);
  }
}

function findErrors() {
  // Loop through all cells and highlight incorrect cells in red font color
  for (var i = 0; i < allCells.length; i++) {
    if (
      (allCells[i].classList.contains("blocks") &&
        allCells[i].style.backgroundColor !== "black") ||
      (allCells[i].classList.contains("circles") &&
        allCells[i].style.backgroundColor === "black")
    ) {
      allCells[i].style.color = "red";
    }
  }

  // Reset red font colors after a 1-second delay
  setTimeout(function () {
    for (var i = 0; i < allCells.length; i++) {
      allCells[i].style.color = "white";
    }
  }, 1000);
}

/* ================================================================= */

function checkSolution() {
  /* Set the initial solved state of the puzzle to true */
  var solved = true;

  /* Loop through the puzzle cells, exiting when an incorrect
      cell is found, setting the solved variable to false */

  for (var i = 0; i < allCells.length; i++) {
    var cellColor = allCells[i].style.backgroundColor;
    var cellClass = allCells[i].className;

    /* A cell is incorrect if it is in the block class and is not black
         or in the circle class and is not white */
    if (
      (cellClass == "blocks" && cellColor !== "black") ||
      (cellClass == "circles" && cellColor !== "rgb(101, 101, 101)")
    ) {
      solved = false;
      break;
    }
  }

  /* If solved is still true after the loop, display an alert box */
  if (solved) alert("Congratulations! You solved the puzzle!");
}

function showSolution() {
  for (var i = 0; i < allCells.length; i++) {
    allCells[i].style.color = "";
    allCells[i].style.backgroundColor = "";
    allCells[i].style.borderRadius = "";
  }
}

function drawHitori(numbers, blocks, rating) {
  /* Initial HTML String for the Hitori Puzzle */
  var htmlString = "";

  /* numbers is a multidimensional array containing the
      Hitori numbers; blocks is a corresponding 
      multidimensional array containing the location of the
      blocks which are indicated by the # character.
      Non-blocking cells are indicated by a blank character.
  */

  /* Create a Web table with the id, hitoriGrid, containing
      the numeric values. Blocks cells have the class name,
      blocks. Non-blocking cells have the class name, circles
  */

  var totalRows = numbers.length;
  var totalCols = numbers[0].length;
  htmlString = "<table id='hitoriGrid'>";
  htmlString += "<caption>" + rating + "</caption>";

  for (var i = 0; i < totalRows; i++) {
    htmlString += "<tr>";

    for (var j = 0; j < totalCols; j++) {
      if (blocks[i][j] == "#") htmlString += "<td  class='blocks'>";
      else htmlString += "<td class='circles'>";

      htmlString += numbers[i][j];
      htmlString += "</td>";
    }

    htmlString += "</tr>";
  }

  htmlString += "</table>";

  return htmlString;
}
