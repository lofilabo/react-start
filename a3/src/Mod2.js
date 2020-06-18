import React from 'react';


class Mod2 extends React.Component {

  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.input = React.createRef();
  }

  onChangeHandler(e){
  	//this.props.evilness(e.target.value);
  	//console.log( e.target.value );
  }

  namedCallForward(invar){
  	console.log( "namedCallForward: " + invar );
  }

  render() {

  	const myStr = this.props.evilness;

    return (
      <fieldset>
		<input type="text" ref={this.input} 
		onChange={this.onChangeHandler}
		/>
      </fieldset>
    );
  }

}


export default Mod2;