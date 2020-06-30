import React from "react";
import ReactDOM from "react-dom";
import { Button } from "reakit/Button";
import { useDialogState, Dialog, DialogDisclosure } from "reakit/Dialog";
import { Portal } from "reakit/Portal";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mod1 from './Mod1';
import Mod2 from './Mod2';


function App() {
  return <><Mod1 /><Mod2 /></>;
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
