import {useState} from "react";
import {BasicSudokuMatrix} from "@/data/basic";
import {Navbar} from "@/components/navbar";
import {Matrix} from "@/components/matrix";
import {Combos} from "@/components/combos";

export function InputPage() {
  // const [input, setInput] = useState<'matrix' | 'combos' | null>(null);
  const [data, setData] = useState(new BasicSudokuMatrix([
    0, 0, 0, 0, 9, 0, 6, 0, 1,
    0, 6, 0, 0, 0, 0, 0, 0, 0,
    9, 0, 4, 3, 0, 5, 0, 0, 0,
    5, 0, 0, 0, 0, 9, 0, 0, 0,
    2, 0, 0, 0, 1, 8, 0, 0, 9,
    0, 4, 0, 0, 0, 0, 0, 2, 0,
    0, 0, 0, 0, 0, 0, 0, 5, 0,
    1, 7, 0, 8, 0, 0, 0, 0, 6,
    8, 0, 0, 2, 0, 0, 4, 1, 0
  ].map((val) => val ? val : null)));

  function updateData(cellId: string, newValue: number | null) {
    const newData = data.copy();

    newData.setVal(cellId, newValue);

    setData(newData);
  }

  return <>
    <Navbar links={[
      {
        path: '/',
        body: 'Home'
      },
      'spacer',
      {
        path: '/',
        disabled: data.empty(),
        body: 'Submit'
      },
    ]}/>
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Matrix data={data} updateData={updateData}/>
      {/*{ input === null && <button onClick={() => setInput('matrix')}>Matrix</button>}*/}
      {/*{ input === null && <button onClick={() => setInput('combos')}>Combos</button>}*/}
      {/*{ input !== null && <button onClick={() => setInput(null)}>Back</button>}*/}
      {/*{ input === 'combos' && <Combos /> }*/}
      {/*{ input === 'matrix' && <Matrix /> }*/}
    </main>
  </>;
}
