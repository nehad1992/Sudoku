// SINGLE CELL ------------------

// returns "correct" when first row has 1-9 in order - NOT repeated
// input: 



// ROWS? --------------------


import { Cell, Row } from './../src/sudoku.js';

describe('cell units', () => {

  test('should correctly construct a cell object with a location pair of row and column and a value', () => {
    var cell = new Cell(0,0,1);
    expect(cell.row).toEqual(0);
    expect(cell.column).toEqual(0);
    expect(cell.value).toEqual(1);
  });

  test('should return undefined if a cell value is empty', () => {
    var noValueCell = new Cell(0,0, );
    expect(noValueCell.checkValue()).toEqual();
  });
  test('should return "not a valid input" error when the input is not a number from 1-9', function(){
    var letterCell = new Cell(0,0,"a");
    expect(letterCell.checkValue()).toEqual("not a valid input");
  });
  test('should return the value when the input is a number from 1-9', () => {
    var cell = new Cell(0,0,8);
    expect(cell.checkValue()).toEqual(8);
  });
});

describe('Row', () => {
  test('should correctly construct a row with a cells array of length 9 and a row value equal to the passed-in row position', () => {
    var row = new Row(20);
    expect(row.cells.length).toEqual(9);
    expect(row.cells[0].row).toEqual(20);
  })
});