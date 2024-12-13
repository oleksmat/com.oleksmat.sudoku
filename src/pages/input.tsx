import {NavBar} from "@/components/nav-bar";

export function InputPage() {
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
      Hello, World! Input
    </main>
  </>;
}
