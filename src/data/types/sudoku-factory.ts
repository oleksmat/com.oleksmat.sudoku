import { SudokuVal } from "./sudoku-val";
import { SudokuMatrix } from "./sudoku-matrix";

export interface SudokuFactory<
  Value extends SudokuVal,
  Matrix extends SudokuMatrix<Value>
> {
  get vals(): Iterable<Value>;

  create(data: (Value | null)[]): Matrix;
}
