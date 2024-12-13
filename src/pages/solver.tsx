import {Link, useParams} from "react-router";

export function SolverPage() {
  const { sudokuId } = useParams<'sudokuId'>();

  return <>
    <nav>
      <Link to="/">Home</Link>
    </nav>
    <main>
      Hello, World! Solver {sudokuId}
    </main>
  </>;
}
