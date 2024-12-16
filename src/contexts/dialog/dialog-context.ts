import {createContext} from "react";
import {DialogInit} from "./dialog-init.ts";

export const DialogContext = createContext<null | {
  openDialog(props: DialogInit): void;
}>(null);