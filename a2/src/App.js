import React from 'react';
import EvilCaluclator from './EvilCaluclator';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <div className="Elem1">
        <Cone />
      </div>
    </div>
  );
}

class Cone extends React.Component {

  constructor(props) {
    super(props);
    this.state = {brutality: '', barbarity: ''};
    this.handleBrutalityChange = this.handleBrutalityChange.bind(this);
    this.handleBarbarityChange = this.handleBarbarityChange.bind(this);    
    this.callableFunction = this.callableFunction.bind(this);
    this.evilweevil = React.createRef();
  }

  componentDidMount() {
    console.log("roots of evilweevilness");
  }

  handleBrutalityChange(brutality) {
    console.log("within handleBrutalityChange:: about to change brutality to value: " + brutality);
    this.setState({brutality},function () {
        console.log("within handleBrutalityChange:: checking state value of brutality (asynch): " + this.state.brutality);
        this.evilweevil.current.namedCallForward();
    });
    
  }

  callableFunction(){
    console.log("Inside Callable");
  }

  handleBarbarityChange(barbarity) {
    this.setState({barbarity});
  }

  render() {

    const brutality = this.state.brutality;
    const barbarity = this.state.barbarity;
    

    return (
      <div>

      <EvilCaluclator ref={this.evilweevil} 
      brutality = {brutality}
      barbarity = {barbarity}
      onBrutalityChange={this.handleBrutalityChange}
      onBarbarityChange={this.handleBarbarityChange}
      onCallableFunction={this.callableFunction}
      incm = {this}
      />
      </div>);
  }


}

export default App;

