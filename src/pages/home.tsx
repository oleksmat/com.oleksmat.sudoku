import {Link} from "react-router";
import {NavBar} from "@/components/nav-bar";
import {useDialog} from "@/contexts/dialog";

export function HomePage() {
  const { openDialog } = useDialog();

  return <>
    <NavBar links={[
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
      <button onClick={() => openDialog({
        children: <button>
          Kek
        </button>,
      })}>Open</button>
    </main>
  </>;
}
