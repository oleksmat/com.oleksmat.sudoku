import {useContext} from "react";
import {DialogContext} from "@/contexts/dialog/dialog-context.ts";

export function useDialog() {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error('Out of context provider');
  }

  return context;
}
