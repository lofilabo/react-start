import React from 'react';
import Mod1 from './Mod1';
import Mod2 from './Mod2';
import Mod3 from './Modal1';

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
    this.val1Change = this.val1Change.bind(this);
    this.val2Change = this.val2Change.bind(this);
    this.mainref1 = React.createRef();
    this.mainref2 = React.createRef();
  }

  componentDidMount() {
    console.log("roots of newapplication");
  
  }

  callableFunction(invar){

      console.log("callableFunction: " + invar);
      //this.val1Change("777");


  }

  val1Change(invar){
    console.log("val1Change: ");
    this.mainref1.current.namedCallForward(invar);
    this.mainref2.current.namedCallForward("888");

      var brutality = "444";
      this.setState({brutality},function () {
          console.log( this.state.brutality );//setstate can only be used in a function which is bind-ed to this!!
      }); 

  }

  val2Change(){
    console.log("val2Change: ");
  }

  render() {

    return (
      <div>
      <Mod1 ref={this.mainref1} 
      onCallableFunction={this.callableFunction}
      valChange={this.val1Change}
      />
      <Mod2 ref={this.mainref2} 
      onCallableFunction={this.callableFunction}
      valChange={this.val2Change}
      />
      <Mod3 
      />
      </div>);
  }

}


export default App;
