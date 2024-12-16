import {SudokuVal} from "./sudoku-val";

export interface SudokuMatrix<Value extends SudokuVal> {
  getVal(cellId: string): Value | null;

  setVal(cellId: string, value: Value | null): void;

  listCells(groupId?: string): string[];

  listGroups(cellId?: string): string[];

  copy(): SudokuMatrix<Value>;

  [Symbol.toStringTag](): string;
}
