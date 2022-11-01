import * as Dialog from "@radix-ui/react-dialog";
import * as Accordion from "@radix-ui/react-accordion";
import { User } from "phosphor-react";

export default function DialogUser(props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="btn-icon row align-items-center"
        title="Profile"
      >
        <User className="icon-sm icon-white-1" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="overlay">
          <Dialog.Content className="dialog text-white-1">
            <Dialog.Title className="font-medium font-md">
              {props.profile.name}
            </Dialog.Title>
            <Accordion.Root
              type="single"
              collapsible
              className="column mt-4"
              defaultValue="personal"
            >
              <Accordion.Item className="mt-1" value="personal">
                <Accordion.Header>
                  <Accordion.Trigger className="bg-transparent font-md text-left text-white-1 first-letter-capitalize">
                    Personal information
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <div className="row mt-4">
                    <div className="column">
                      <label htmlFor="email">Username</label>
                      <input
                        type={"text"}
                        defaultValue={props.profile.username}
                        className="input pa-2 font-sm border-radius-soft border-default"
                        disabled={true}
                      />
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="column">
                      <label htmlFor="email">Email</label>
                      <input
                        type={"text"}
                        defaultValue={props.profile.email}
                        className="input pa-2 font-sm border-radius-soft border-default"
                        disabled={true}
                      />
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="column">
                      <label htmlFor="email">Website</label>
                      <input
                        type={"text"}
                        defaultValue={props.profile.website}
                        className="input pa-2 font-sm border-radius-soft border-default"
                        disabled={true}
                      />
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="column">
                      <label htmlFor="email">Phone:</label>
                      <input
                        type={"text"}
                        defaultValue={props.profile.phone}
                        className="input pa-2 font-sm border-radius-soft border-default"
                        disabled={true}
                      />
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              <hr className="my-4" />

              <Accordion.Item value="address">
                <Accordion.Header>
                  <Accordion.Trigger className="bg-transparent font-md text-left text-white-1 first-letter-capitalize">
                    Address
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <div className="row mt-4">
                    <div className="column">
                      <label htmlFor="email">Street</label>
                      <input
                        type={"text"}
                        defaultValue={props.profile.address.street}
                        className="input pa-2 font-sm border-radius-soft border-default"
                        disabled={true}
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="column">
                      <label htmlFor="email">Suite</label>
                      <input
                        type={"text"}
                        defaultValue={props.profile.address.suite}
                        className="input pa-2 font-sm border-radius-soft border-default"
                        disabled={true}
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="column">
                      <label htmlFor="email">City</label>
                      <input
                        type={"text"}
                        defaultValue={props.profile.address.city}
                        className="input pa-2 font-sm border-radius-soft border-default"
                        disabled={true}
                      />
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>

              <hr className="my-4" />

              <Accordion.Item value="company">
                <Accordion.Header>
                  <Accordion.Trigger className="bg-transparent font-md text-left text-white-1 first-letter-capitalize">
                    Company
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  <div className="row mt-4">
                    <div className="column">
                      <label htmlFor="email">Name</label>
                      <input
                        type={"text"}
                        defaultValue={props.profile.company.name}
                        className="input pa-2 font-sm border-radius-soft border-default"
                        disabled={true}
                      />
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
