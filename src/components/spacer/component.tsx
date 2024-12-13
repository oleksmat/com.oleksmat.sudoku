import {PropsWithChildren} from "react";

type Props = PropsWithChildren<{
  grow?: number
}>;

export function Spacer(props: Props) {
  return <div style={{
    flexGrow: props.grow ?? 1,
    height: '1px',
  }}></div>;
}
