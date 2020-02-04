// SINGLE CELL ------------------

// returns "incorrect" 
// input: any output: incorrect

// returns "empty spot" when cell not filled/defined
// input: _

// returns "incorrect" when cell has something other than 1-9
// input: a

// returns "correct" when first cell has any numbers from 1-9
// input: 1

// returns "correct" when first row has 1-9 in order - NOT repeated
// input: 



// ROWS? --------------------


import { Cell } from './../src/sudoku.js';

describe('cell units', () => {

  test('should correctly construct a cell object with a location pair of row and column and a value', () => {
    var cell = new Cell(0,0,1);
    expect(cell.row).toEqual(0);
    expect(cell.column).toEqual(0);
    expect(cell.value).toEqual(1);
  });
});