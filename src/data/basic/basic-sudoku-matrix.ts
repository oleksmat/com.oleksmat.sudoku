import {SudokuMatrix} from "../types";
import {BasicSudokuVal} from "./basic-sudoku-val";
import {BasicSudokuUtils} from "./basic-sudoku-utils";

// CELL ID: [1-9]x[1-9]
// GROUP ID: [RCB]:[1-9]

export class BasicSudokuMatrix implements SudokuMatrix<BasicSudokuVal> {
  private readonly data: (BasicSudokuVal | null)[];

  constructor(data?: (BasicSudokuVal | null)[]) {
    this.data = data ? new Array(data) : new Array(81).fill(null);
  }

  getVal(cellId: string): BasicSudokuVal | null {
    return this.data[BasicSudokuUtils.parseCellId(cellId)];
  }

  setVal(cellId: string, value: BasicSudokuVal | null): void {
    this.data[BasicSudokuUtils.parseCellId(cellId)] = value;
  }

  listCells(groupId?: string): string[] {
    if (!groupId) {
      const arr = new Array<string>(81);

      for (let i = 0; i < 81; i++) {
        arr[i] = `${(i - i % 9) / 9}x${i % 9}`;
      }

      return arr;
    }

    const arr = new Array<string>(9);
    const num = +groupId[2];

    for (let i = 0; i < 9; i++) {
      switch (groupId[0]) {
        case 'r':
          arr[i] = `${num}x${i}`;
          break;
        case 'c':
          arr[i] = `${i}x${num}`;
          break;
        case 'b':
          const row = (num - num % 3) + (i - i % 3) / 3;
          const col = (num % 3) * 3 + i % 3;

          arr[i] = `${row}x${col}`;
          break;
      }
    }

    return arr;
  }

  listGroups(cellId?: string): string[] {
    if (!cellId) {
      const arr = new Array<string>(27);

      for (let i = 0; i < 27; i++) {
        const idx = (i - i % 9) / 9;

        arr[i] = `${idx === 0 ? 'r' : idx === 1 ? 'c' : 'b'}:${i % 9}`;
      }

      return arr;
    }

    const row = +cellId[0];
    const col = +cellId[2];
    const boxRow = (row - row % 3);
    const boxCol = (col - col % 3) / 3;

    return [`r:${row}`, `c:${col}`, `b:${boxRow + boxCol}`]
  }

  copy(): SudokuMatrix<BasicSudokuVal> {
    return new BasicSudokuMatrix(this.data);
  }

  [Symbol.toStringTag](): string {
    return BasicSudokuUtils.toString(this.data);
  }
}