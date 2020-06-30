import React, { Component } from 'react';
import Dialog1 from './components/Dialog1';
import Dialog2 from './components/Dialog2';

class App extends Component {
  state = {
    isOpen1: false
  }
  state = {
    isOpen2: false
  }
  render() {
    return (
    	<>
        <button onClick={(e) => this.setState({ isOpen1: true })}>Life Eternal</button>
        <Dialog1 isOpen={this.state.isOpen1} onClose={(e) => this.setState({ isOpen1: false })}>

			A dream of another existence<br/>
			You wish to die<br/>
			A dream of another world<br/>
			You pray for death<br/>
			To release the soul<br/>
			One must die<br/>
			To find peace inside<br/>
			You must get eternal<br/>
			I am a mortal but am I human?<br/>
			How beautiful life is now when my time has come<br/>
			A human destiny but nothing human inside<br/>
			What…

        </Dialog1>
        <button onClick={(e) => this.setState({ isOpen2: true })}>Pagan Fears</button>
        <Dialog2 isOpen={this.state.isOpen2} onClose={(e) => this.setState({ isOpen2: false })}>

			The bloody history from the past<br/>
			Deceased humans now forgotten<br/>
			An age of legends and fear<br/>
			A time now so distant<br/>
			Less numbered as they were<br/>
			Their lives so primitive and pagan<br/>
			Superstitions were a part of the life<br/>
			So unprotected in the dark nights<br/>
			Pagan fears<br/>
			The past is alive<br/>
			The past is alive

        </Dialog2>
      </>
    );
  }
}

export default App;
