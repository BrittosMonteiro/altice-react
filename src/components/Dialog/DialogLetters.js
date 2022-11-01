import * as Dialog from "@radix-ui/react-dialog";
import { EnvelopeSimple } from "phosphor-react";

export default function DialogLetter(props) {

  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="btn-icon row align-items-center font-light gap-1"
        title="Letters"
      >
        <EnvelopeSimple className="icon-sm icon-white-1" />
        <span className="text-white-1 font-sm font-light">
          ({props.letters.length})
        </span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay">
          <Dialog.Content className="dialog text-white-1"></Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
