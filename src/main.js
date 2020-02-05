import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;
import { Puzzle } from './sudoku';

function displayPuzzle(puzzle){
  var htmlOutput = "Rows, 1 2 3 4 5 6 7 8 9 <br>";
  for(var i = 0; i<9; i++){
    htmlOutput += "Row  :" + i+1;
    for (var j=0; j<9; j++){
      htmlOutput += j + " ";
    } 
    htmlOutput += "<br>";
  }
  $("body").html(htmlOutput);
}

$(document).ready(function() {
  var puzzle = new Puzzle();
  puzzle.autofillPuzzle();
  displayPuzzle(puzzle);
});