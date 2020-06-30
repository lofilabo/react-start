import React from 'react';
import Button from 'react-bootstrap/Button';

class Mod1 extends React.Component {

  constructor(props) {
    super(props);
    this.onButton1Click = this.onButton1Click.bind(this);

  }

  onButton1Click(){
    console.log( "onButton1Click." );
    this.props.onCallableFunction("666");
    this.props.valChange("333");
  }

  onButton2Click(){}

  onButton3Click(){}
  
  onButton4Click(){}

  namedCallForward(invar){
  	console.log( "namedCallForward: " + invar );
  }

  render() {
    
    return (
      <fieldset>
        <Button variant="primary" className="btn btn-default" onClick={this.onButton1Click}>A Nice Button</Button>
        &nbsp;
        <Button variant="success" className="btn btn-default" onClick={this.onButton2Click}>A Nice Button 2</Button>
        &nbsp;
        <Button variant="warning" className="btn btn-default" onClick={this.onButton3Click}>A Nice Button 3</Button>
        &nbsp;
        <Button variant="danger" className="btn btn-default" onClick={this.onButton4Click}>A Nice Button 4</Button>
      </fieldset>
    );
  }

}

export default Mod1;