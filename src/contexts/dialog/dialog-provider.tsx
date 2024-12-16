import {PropsWithChildren, useRef, useState, MouseEvent} from "react";
import {Dialog} from "@/components/dialog";
import {DialogData} from "./dialog-data";
import {DialogInit} from "./dialog-init";
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

  function openDialog(props: DialogInit) {
    const dialog = dialogRef.current;

    if (!dialog) {
      return;
    }

    if (dialogData && dialogData.closed) {
      dialogData.closed();
    }

    const data = props({
      close: () => dialog.close()
    });

    setDialogData(data);

    if (data.nonModal) {
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
