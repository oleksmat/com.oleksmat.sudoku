import {PropsWithChildren} from "react";

type Props = PropsWithChildren<{
  dir?: 'row' | 'col'
}>;

export function Stack(props: Props) {
  return <div style={{
    display: 'flex',
    flexDirection: props.dir === 'col' ? 'column' : 'row',
  }}>
    {props.children}
  </div>;
}
