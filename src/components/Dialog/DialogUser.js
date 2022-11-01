import * as Dialog from "@radix-ui/react-dialog";
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
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
