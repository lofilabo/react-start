import React from 'react';


class EvilnessInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {evilness: ''};
  }

  componentDidMount() {
    console.log("roots of evilness");
  }  

  handleChange(e) {
    //this.setState({evilness: e.target.value});
    this.props.onTemperatureChange(e.target.value);
  }


  render() {
    //const evilness = this.state.evilness;
    const evilness = this.props.evilness;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter {scale}</legend>
        <input value={evilness} onChange={this.handleChange} />
        <button className="btn btn-default" onClick={this.props.onButtonClick}>A Nice Button</button>
      </fieldset>
    );
  }
}


class EvilnessCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleEvilnessChange = this.handleEvilnessChange.bind(this);
    this.handleWickednessChange = this.handleWickednessChange.bind(this);
    this.onButton1Click = this.onButton1Click.bind(this);
    this.onButton2Click = this.onButton2Click.bind(this);
    this.state = {evilness: '', scale: 'e'};
  }

  namedCallForward(){
    console.log("within namedCallForward:: brutality NOW at (synch) value: " + this.props.brutality);
  }

  handleEvilnessChange(evilness) {
    this.setState({evilness});

    var newbrutality = evilness;
    console.log("within handleEvilnessChange:: about to change brutality to value: " + newbrutality);
    this.props.onBrutalityChange(newbrutality);
    this.props.onCallableFunction();
    console.log("within handleEvilnessChange:: brutality NOW at (synch) value: " + this.props.brutality);
  }

  handleWickednessChange(evilness) {
    this.setState({evilness});
    console.log("within handleEvilnessChange:: brutality NOW at (synch) value: " + this.props.brutality);
  }

  onButton1Click(){
    console.log("within onButton1Click:: brutality NOW at (synch) value: " + this.props.brutality);
  }

  onButton2Click(){
    this.props.onBrutalityChange("666");
    console.log("within onButton2Click:: brutality NOW at (synch) value: " + this.props.brutality);
  }

  render() {
    const celsius = this.state.evilness;
    const fahrenheit = this.state.evilness;

    return (
      <div>
        <EvilnessInput
          onButtonClick = {this.onButton1Click}
          scale="evilness"
          evilness={celsius}
          onTemperatureChange={this.handleEvilnessChange} 
          />
        
        <EvilnessInput
          scale="wickedness"
          onButtonClick = {this.onButton2Click}
          evilness={fahrenheit}
          onTemperatureChange={this.handleWickednessChange} />
      </div>     
    );
  }
}




export default EvilnessCalculator;