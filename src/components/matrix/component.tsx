import {BasicSudokuMatrix} from "@/data/basic";
import {useDialog} from "@/contexts/dialog";
import {Selector} from "@/components/selector";
import './stytes.css';

type Props = {
  data: BasicSudokuMatrix;

  updateData: (cellId: string, value: number | null) => void;
};

export function Matrix(props: Props) {
  const { openDialog } = useDialog();

  function openSelector(cellId: string) {
    openDialog(({ close }) => ({
      children: <Selector value={props.data.getVal(cellId)} select={
        (newValue) => {
          props.updateData(cellId, newValue);
          close();
        }
      } dismiss={close} />
    }));
  }

  return <div className={"matrix"}>
    {
      props.data.listCells().map((cellId) => <div
        key={cellId}
        onClick={() => openSelector(cellId)}
      >
        {props.data.getVal(cellId)}
      </div>)
    }
  </div>;
}
