import {PropsWithChildren} from "react";
import './styles.css';

type Props = PropsWithChildren<{
  onClick?: () => void;

  disabled?: boolean;
}>;

export function Button(props: Props) {
  return <button className={"button"} disabled={props.disabled} onClick={props.onClick}>
    {props.children}
  </button>;
}
