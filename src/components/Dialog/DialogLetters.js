import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";
import { EnvelopeSimple } from "phosphor-react";

export default function DialogLetter(props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="btn-icon row align-items-center font-light gap-1"
        title="Letters"
      >
        <EnvelopeSimple className="icon-sm icon-white-1" />
        {props.letters ? (
          <span className="text-white-1 font-sm font-light">
            ({props.letters.length})
          </span>
        ) : null}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay">
          <Dialog.Content className="dialog text-white-1">
            {props.letters ? (
              <Accordion.Root type="single" collapsible className="column">
                {props.letters.map((letter, key) => (
                  <div key={letter.id}>
                    <Accordion.Item
                      key={letter.id}
                      value={letter.id}
                      className="border-radius-soft pa-2"
                    >
                      <Accordion.Header>
                        <Accordion.Trigger className="bg-transparent font-md text-left text-white-1 first-letter-capitalize">
                          {letter.title}
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className="note font-sm mt-4 pa-2 border-radius-soft border-default bg-transparent text-white-1  first-letter-capitalize">
                        {letter.body}
                      </Accordion.Content>
                    </Accordion.Item>
                    {key < props.letters.length - 1 ? (
                      <hr className="mt-2" />
                    ) : null}
                  </div>
                ))}
              </Accordion.Root>
            ) : (
              <p className="no-data pa-4 border-radius-sm font-light font-sm text-center">
                It was not possible to load posts. <br /> Try again later.
              </p>
            )}
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
