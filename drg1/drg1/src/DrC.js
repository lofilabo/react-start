import React from 'react';
import Draggable from 'react-draggable';
import './DottedBox.css';
const ClickOutHandler = require('react-onclickout');

class DrC extends React.Component {

  constructor(props) {
    
    super(props);
    this.p1 = props.p1;
    this.p2 = props.p2;
    this.p3 = props.p3;
    this.x = props.x;
    this.y = props.y;
    this.zval = props.zval;
    //necessary statements to make the button and text-area
    //able to call fucntions at large in the class
    this.handleChange = this.handleChange.bind(this);
    this.buttonClick1 = this.buttonClick1.bind(this);
    this.buttonClick2 = this.buttonClick2.bind(this);
    this.gettingFocus = this.gettingFocus.bind(this);
    this.onClickOut   = this.onClickOut.bind(this);

    this.state = {message: props.p1, zval:props.zval} //initialise the state to be the property p1.
    //this.state = {zval: props.zval}
  }

  onClickOut(e) {
    /*
    You MUST remember to bind this in the constructor, otherwise
    YOU ARE ONLY EVER UPDATING THE STATE OF THIS COMPONENT!!
    AND NOT THE COMPONENT IT'S IN.
    */
    //console.log(e);
    this.setState({zval:1});
    //console.log(this.state.zval);
  }

  namedCallForward(invar){
    //update the stateful message according to a variable
    //passed in from outside.
    
    //console.log("DrC - namedCallForward : " + invar);
    this.setState({ message: invar});
  }

  buttonClick1(){
    //call an Upward function, passing either the stateful message
    //or the initial Property p1
    
    //console.log("Button Clicked");
    this.props.onCallableFunction(this.state.message);
    //this.props.onCallableFunction(this.props.p1);
  }

  buttonClick2(){
    //call an Upward function, passing either the stateful message
    //or the initial Property p1
    
    //console.log("Button Clicked");
    //this.props.onCallableFunction(this.state.message);
    this.props.onCallableFunction(this.props.p1);
  }

  handleChange(e){
    //update the text-area with the contents of the text-area.  
    //How to make the text area editable!!
    this.setState({ message: e.target.value});;
  }

  gettingFocus(e){
    this.setState({zval:3});
    //console.log(this.state.zval);
  }



  render() {
      var divStyle = {
        zIndex:this.state.zval
      };

    return (
      <>
      
      <Draggable
        handle=".handle1"
        defaultPosition={{x: this.x, y: this.y}}
        position={null}
        grid={[10,10]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
        >
        
        <div onFocus={this.gettingFocus}  style={divStyle} className="DottedBox">
          <ClickOutHandler onClickOut={this.onClickOut}>
            <div onClick={this.gettingFocus} className="handle1">{this.p2}
                <div className="closr">&times;</div>
            </div>
          </ClickOutHandler>

          <div onClick={this.gettingFocus} className="DrContent">

            <div>{this.props.p1}</div>

                <div><input className="Inpyt" value={this.state.message} onChange={this.handleChange} /></div>
                <div className="Btnz">
                <button className="Btn" onClick={this.buttonClick1}>Button</button>
                <button className="Btn" onClick={this.buttonClick2}>Button</button>

            </div>

          </div>
        </div>
        
      </Draggable>
      </>
    );
  }

}

export default DrC;