import {Link} from "react-router";
import {NavBar} from "@/components/nav-bar";

export function HomePage() {
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
    </main>
  </>;
}
