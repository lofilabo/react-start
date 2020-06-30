import React from 'react';


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

  namedCallForward(invar){
  	console.log( "namedCallForward: " + invar );
  }

  render() {
    
    return (
      <fieldset>
        <button className="btn btn-default" onClick={this.onButton1Click}>A Nice Button</button>
      </fieldset>
    );
  }

}

export default Mod1;