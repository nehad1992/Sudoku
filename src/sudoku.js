function Puzzle(){

}

export function Row(number){
  this.number = number;
  this.cells = [new Cell(number, 0, ), new Cell(number, 1, ), new Cell(number, 2, ), new Cell(number, 3, ), new Cell(number, 4, ), new Cell(number, 5, ), new Cell(number, 6, ), new Cell(number, 7, ), new Cell(number, 8, )];
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
