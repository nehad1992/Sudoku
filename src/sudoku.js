function Puzzle(){

}

export function Cell(row, column, value){
 this.row = row;
 this.column = column;
 this.value = value;
}

Cell.prototype.checkValue = function(){
  var not1to9 = /[^1-9]/;
  if (!this.value){
    return undefined;
  } else if (this.value.match(not1to9)){
    return "not a valid input";
  }

}