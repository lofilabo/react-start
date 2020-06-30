import React from "react";
import ReactDOM from "react-dom";
import { Button } from "reakit/Button";
import { useDialogState, Dialog, DialogDisclosure } from "reakit/Dialog";
import { Portal } from "reakit/Portal";
import 'bootstrap/dist/css/bootstrap.min.css';

function Dialog_draw() {
  const dialog1 = useDialogState({ modal: false });
  const dialog2 = useDialogState({ modal: false });
  return (
    <>
      <DialogDisclosure {...dialog1} style={{ color: "white", background: "red" }}>Open chat 1</DialogDisclosure>
      <Portal>
        <Dialog
          {...dialog1}
          aria-label="Welcome"
          hideOnClickOutside={false}
          style={{
          	color: "white", background: "red",
            transform: "none",
            width: 500,
            height: 200,
          }}
        >
        	Freezing Moon

          <Button 
            style={{
          	color: "white", background: "red",
            width: 100,
            height: 40,
            }}
            onClick={dialog1.hide}>Close chat</Button>
        </Dialog>

      </Portal>
    </>
  );
}
function Mod1() {
  return <Dialog_draw />;
}

ReactDOM.render(<Mod1 />, document.getElementById("root"));
export default Mod1;
