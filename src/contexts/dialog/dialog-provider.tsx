import {PropsWithChildren, useRef, useState, MouseEvent} from "react";
import {Dialog} from "@/components/dialog";
import {DialogData} from "./dialog-data";
import {DialogContext} from "./dialog-context";

type Props = PropsWithChildren;

export function DialogProvider(props: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [dialogData, setDialogData] = useState<DialogData | null>(null);

  function onDialogClick(evt: MouseEvent) {
    const dialog = dialogRef.current;

    if (!dialog || evt.target !== dialog) {
      return;
    }

    setDialogData(null);

    dialog.close();

    const closed = dialogData?.closed;

    if (closed) {
      closed()
    }
  }

  function openDialog(props: DialogData) {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (dialogData && dialogData.closed) {
      dialogData.closed();
    }

    setDialogData(props);

    if (props.nonModal) {
      dialog.show();
    } else {
      dialog.showModal();
    }
  }

  return <>
    <DialogContext.Provider value={{ openDialog }}>
      {props.children}
    </DialogContext.Provider>
    <Dialog ref={dialogRef} onClick={onDialogClick}>
      {dialogData?.children}
    </Dialog>
  </>;
}
