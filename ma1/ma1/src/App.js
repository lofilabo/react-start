import React from 'react';
import Mod1 from './Mod1';


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
  }

  componentDidMount() {
    console.log("roots of newapplication");
  }

  render() {

    return (<div><Mod1 /> </div>);
  }
}


export default App;
