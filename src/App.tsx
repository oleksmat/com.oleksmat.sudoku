import {useState} from "react";

export function App() {
  const [sudokuId, setSudokuId] = useState<string | null>(null);
  const [sudokus, setSudokus] = useState<Record<string, {
    init: Record<string, number>;
  }>>({});
  const [input, setInput] = useState<Record<string, number> | null>(null);

  if (sudokuId) {
    function backHome() {
      setSudokuId(null);
    }

    return <div>
      <button onClick={backHome} style={{display: 'block'}}>Back</button>
      <div>
        {JSON.stringify(sudokus[sudokuId])}
      </div>
    </div>;
  } else {
    if (input) {
      function dismissInput() {
        setInput(null);
      }

      const inputData = input;

      function submitInput() {
        const id = Math.floor(Math.random() * 10000).toString().padStart(4, '0');

        setSudokus({
          ...sudokus,
          [id]: {
            init: inputData,
          },
        })
        setInput(null);
      }

      return <div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <button onClick={dismissInput}>Back</button>
          <button disabled={!Object.keys(input).length} onClick={submitInput}>Create</button>
        </div>
        <div>
          {JSON.stringify(input)}
        </div>
      </div>;
    } else {
      function startInput() {
        setInput({
          "0x0": 1
        });
      }

      return <div>
        <button onClick={startInput} style={{display: 'block'}}>Create</button>
        <ul>
          {Object.keys(sudokus).map((id) => <li onClick={() => setSudokuId(id)}>
            {JSON.stringify(sudokus[id])}
          </li>)}
        </ul>
      </div>;
    }
  }
}
