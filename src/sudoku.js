function Puzzle(){

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