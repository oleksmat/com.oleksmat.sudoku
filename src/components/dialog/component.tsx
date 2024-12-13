import {DOMAttributes, ForwardedRef, PropsWithChildren} from "react";
import './styles.css';

export type Props = PropsWithChildren<{
  onClick?: DOMAttributes<HTMLDialogElement>['onClick'];
}>;

export function Dialog(props: Props, ref?: ForwardedRef<HTMLDialogElement>) {
  return <dialog onClick={props.onClick} ref={ref}>
    {props.children}
  </dialog>;
}
