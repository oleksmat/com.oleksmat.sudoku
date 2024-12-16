import { SudokuFactory } from "../types";
import { BasicSudokuVal } from "./basic-sudoku-val";
import { BasicSudokuMatrix } from "./basic-sudoku-matrix";

const VALS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export class BasicSudokuFactory implements SudokuFactory<
  BasicSudokuVal,
  BasicSudokuMatrix
> {
  get vals(): Iterable<BasicSudokuVal> {
    return VALS;
  }

  create(data?: (BasicSudokuVal | null)[]): BasicSudokuMatrix {
    return new BasicSudokuMatrix(data);
  }
}
