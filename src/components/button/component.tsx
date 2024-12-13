import {PropsWithChildren} from "react";

type Props = PropsWithChildren<{
  disabled?: boolean;
}>;

export function Button(props: Props) {
  return <button style={{
    display: 'block',
    fontSize: '1.5em',
    padding: '0.5em',
    appearance: 'none',
    border: 'none',
  }} disabled={props.disabled}>
    {props.children}
  </button>;
}
