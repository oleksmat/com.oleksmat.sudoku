import {PropsWithChildren} from "react";

export type DialogData = PropsWithChildren<{
  nonModal?: boolean;

  closed?: () => void;
}>
