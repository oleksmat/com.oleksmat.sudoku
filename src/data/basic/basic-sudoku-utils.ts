import {BasicSudokuVal} from "./basic-sudoku-val.ts";

const TO_STRING_LINE = new Array(9).fill('-').join('+');

const STRINGS = (() => {
  const cells = new Array(81);

  for (let i = 0; i < cells.length; i++) {
    cells[i] = `${(i - i % 9) / 9}x${i % 9}`;
  }

  const rows = new Array(27);

  for (let i = 0; i < rows.length; i++) {
    if ((i - i % 9) / 9 === 0) {
      rows[i % 9] = '';
    }
    cells[i] = `${(i - i % 9) / 9}x${i % 9}`;
  }

  return {
    cells,
  };
})();

export const BasicSudokuUtils = {


  parseCellId(cellId: string): number {
    const row = +cellId[0];
    const col = +cellId[2];

    return row * 9 + col;
  },
  toString(data: (BasicSudokuVal | null)[]) {
    let result = TO_STRING_LINE;

    for (let i = 0; i < 9; i++) {
      result += '|';

      for (let j = 0; j < 9; j++) {
        const state = data[i * 9 + j];

        if (state === null) {
          result += ' ';
        } else {
          result += String(state);
        }

        result += '|';
      }

      result += TO_STRING_LINE;
    }

    return result;
  }
};
