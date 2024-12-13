import {createContext} from "react";
import {DialogData} from "@/contexts/dialog/dialog-data.ts";

export const DialogContext = createContext<null | {
  openDialog(props: DialogData): void;
}>(null);