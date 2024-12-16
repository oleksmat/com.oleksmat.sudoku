import {DialogData} from "./dialog-data.ts";

export type DialogInit = (props: {
  close: () => void;
}) => DialogData;
