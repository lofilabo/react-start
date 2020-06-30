
//Bootstrap modal windows do not play nicely with 
//other windows!!  You can have one or the other, not both...
//import Modal1 from './Modal1';
import Modal2 from './Modal2';
import React from 'react';


function App() {
  return (
      <div className="Elem1">
        <Cone />
      </div>
  );
}

class Cone extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    console.log("roots of newapplication");
  }

  render() {
    return (<></>);
  }
}


export default App; 