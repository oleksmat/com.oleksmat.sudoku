import {useParams} from "react-router";
import {NavBar} from "@/components/nav-bar";

export function SolverPage() {
  const { sudokuId } = useParams<{ sudokuId: string }>();

  return <>
    <NavBar links={[
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
