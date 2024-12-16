import {useParams} from "react-router";
import {Navbar} from "src/components/navbar";

export function SolverPage() {
  const { sudokuId } = useParams<{ sudokuId: string }>();

  return <>
    <Navbar links={[
      {
        path: '/',
        body: 'Home'
      },
      'spacer',
      {
        path: '/',
        disabled: true,
        body: 'Submit'
      },
    ]}/>
    <main>
      Hello, World! Solver {sudokuId}
    </main>
  </>;
}
