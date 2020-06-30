import React from 'react';
import ReactDOM from "react-dom";
import { Button } from "reakit/Button";
import { useDialogState, Dialog, DialogDisclosure } from "reakit/Dialog";
import { Portal } from "reakit/Portal";
import 'bootstrap/dist/css/bootstrap.min.css';

class ModC1 extends React.Component {

  constructor(props) {
    super(props);

  }

  onButton1Click(){
  }

  render() {
    const dialog2 = useDialogState({ modal: false });
    return (
      <fieldset>
        <button className="btn btn-default" onClick={this.onButton1Click}>A Nice Button</button>


          <Button           
            style={{
            color: "white", background: "blue",
            width: 100,
            height: 40,
            right:0,
            }}
          onClick={this.onButton1Click}>Close chat</Button>

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
            </Dialog>
          </Portal>
      
      </fieldset>
    );
  }
}

export default ModC1;