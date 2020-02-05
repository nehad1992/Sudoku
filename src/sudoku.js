export function Puzzle(){
  this.rows = [new Row(0), new Row(1),new Row(2),
    new Row(3), new Row(4), new Row(5), new Row(6),
    new Row(7), new Row(8)];
}

Puzzle.prototype.checkColumnRepeats = function(){
  var columnNumber = 0;
  for(var i =0; i<9; i++){
    var currentColumnCell = this.rows[i].cells[columnNumber];
    for(var j=0; j<9; j++){
      if (currentColumnCell!=this.rows[j].cells[columnNumber] && currentColumnCell.value === this.rows[j].cells[columnNumber].value){
        return false;
      }
    }
  }return true;
}

Puzzle.prototype.autofillPuzzle = function(){
  for (var i=0; i<9; i++){
    this.rows[i].autoAssignRowValues(i+1);
  }
}

export function Row(number){
  this.number = number;
  this.cells = [new Cell(number, 0, ), new Cell(number, 1, ), new Cell(number, 2, ), new Cell(number, 3, ), new Cell(number, 4, ), new Cell(number, 5, ), new Cell(number, 6, ), new Cell(number, 7, ), new Cell(number, 8, )];
}

Row.prototype.autoAssignRowValues = function(start){
  var currentVal = start;
  for (var i = 0; i < 9; i ++){
    if (currentVal%9 === 0){
      var inputVal = 9;
    } else {
      var inputVal = currentVal%9;
    }
    this.cells[i].value = (inputVal);
    currentVal++;
  }
}

Row.prototype.checkNoRepeats = function(){
  for (var i = 0; i < 9; i++) {
    var currentCell = this.cells[i];
    for (var j = 0; j < 9; j++) {
      if (this.cells[j] != currentCell && this.cells[j].value === currentCell.value){
        return false;
      }
    }
  }
  return true;
}

export function Cell(row, column, value){
 this.row = row;
 this.column = column;
 this.value = value;
}

Cell.prototype.checkValue = function(){
  if (!this.value){
    return undefined;
  } else {
    var stringVal = this.value.toString();
    if (stringVal.match(/[^1-9]/)){
      return "not a valid input";
    } else {
      return this.value;
    }
  }
}

Cell.prototype.assignValue = function(input){
  this.value = input;
}
