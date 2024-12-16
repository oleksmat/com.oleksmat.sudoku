import { Button } from "../button";
import {SudokuVal} from "@/data/types";
import './styles.css';

type Props = {
  value: SudokuVal | null;

  select: (newValue: number | null) => void;

  dismiss: () => void;
};

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export function Selector(props: Props) {
  return <div className={"selector"}>
    <div className={"values"}>
      {
        ...data.map((idx) => <Button onClick={() => props.select(idx + 1)}>
          {idx + 1}
        </Button>)
      }
    </div>
    <div className={"options"}>
      <Button onClick={() => props.select(null)}>
        Empty
      </Button>
      <Button onClick={props.dismiss}>
        Dismiss
      </Button>
    </div>
  </div>;
}
