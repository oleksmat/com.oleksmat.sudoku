import {Link} from "react-router";
import {Navbar} from "src/components/navbar";
import {useDialog} from "@/contexts/dialog";

export function HomePage() {
  const { openDialog } = useDialog();

  return <>
    <Navbar links={[
      'spacer',
      {
        path: '/sudoku',
        body: 'Create'
      },
    ]}/>
    <main>
      Hello, World! Home
      <ul>
        <Link to="/sudoku/abc">Solver</Link>
      </ul>
    </main>
  </>;
}
