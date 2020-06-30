import React from "react";
import ReactDOM from "react-dom";
import { Button } from "reakit/Button";
import { useDialogState, Dialog, DialogDisclosure } from "reakit/Dialog";
import { Portal } from "reakit/Portal";
import 'bootstrap/dist/css/bootstrap.min.css';

function button_handler_2(){
  
}

function Dialog_draw() {
  const dialog1 = useDialogState({ modal: false });
  const dialog2 = useDialogState({ modal: false });
  return (
    <>
      <DialogDisclosure {...dialog2} style={{ color: "white", background: "blue" }}>Open chat 2</DialogDisclosure>
      <Portal>
        <Dialog
          {...dialog2}
          aria-label="Welcome"
          hideOnClickOutside={false}
          style={{
          	color: "white", background: "blue",
            width: 500,
            height: 200,
            borderWidth: 3,
          }}
        >
        	Life Eternal

          <Button           
            style={{
            color: "white", background: "blue",
            width: 100,
            height: 40,
            right:0,
            }}
          onClick={dialog2.hide}>Close chat</Button>
          <Button           
            style={{
            color: "white", background: "blue",
            width: 100,
            height: 40,
            right:0,
            }}
          onClick={button_handler_2}>Button Handler 2</Button>
        </Dialog>
      </Portal>
    </>
  );
}
function Mod2() {
    return <Dialog_draw />;
}

ReactDOM.render(<Mod2 />, document.getElementById("root"));
export default Mod2;
