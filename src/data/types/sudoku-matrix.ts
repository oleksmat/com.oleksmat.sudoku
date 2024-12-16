import {SudokuVal} from "./sudoku-val";

export interface SudokuMatrix {
  getVal(cellId: string): SudokuVal | null;

  setVal(cellId: string, value: SudokuVal | null): void;

  listCells(groupId?: string): string[];

  listGroups(cellId?: string): string[];

  copy(): SudokuMatrix;

  empty(): boolean;

  vals(): SudokuVal[];

  [Symbol.toStringTag](): string;
}
