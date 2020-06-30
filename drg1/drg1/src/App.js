import React from 'react';
import ReactDOM from 'react-dom';
import DrC from './DrC';

 
class App extends React.Component {

  constructor(props) {
    super(props);


    this.callableFunction1 = this.callableFunction1.bind(this);
    this.callableFunction2 = this.callableFunction2.bind(this);
    this.callableFunction3 = this.callableFunction3.bind(this);

    this.mainref1 = React.createRef();
    this.mainref2 = React.createRef();
    this.mainref3 = React.createRef();
  }
 
  componentDidMount(){

        this.setState({
            blah: ['Append to blah'],
            pokey: ['pokey from parent']
        });

    

  }

  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };
 
  callableFunction1(invar){
      console.log("callableFunction1: " + invar);
      this.mainref2.current.namedCallForward(invar);
  }

  callableFunction2(invar){
      console.log("callableFunction2: " + invar);
      this.mainref3.current.namedCallForward(invar);
  }

  callableFunction3(invar){
      console.log("callableFunction 3: " + invar);
      this.mainref1.current.namedCallForward(invar);
      //const cp3 = "Follow the freezing moon";
      //this.myTinyObject4 = React.createElement(DrC,  {key:4, ref:this.mainref4, p1:cp3, p2:"Freezing Moon: 4 of 3", zval:10, onCallableFunction:this.callableFunction1});
      //console.log("NAGASH");
      //ReactDOM.render(this.myTinyObject4, document.getElementById('root'))
  }

  render() {

    const cp1 = "A dream of another existence, You wish to die, A dream of another world";
    const cp2 = "You pray for death, To release the soul, One must die";
    const cp3 = "To find peace inside, You must get eternal, I am a mortal but am I human?";

    this.myTinyObject1 = React.createElement(DrC,  {key:1, ref:this.mainref1, p1:cp1, p2:"Freezing Moon: 1 of 3", zval:3, x:20, y:100, onCallableFunction:this.callableFunction1});
    this.myTinyObject2 = React.createElement(DrC,  {key:2, ref:this.mainref2, p1:cp2, p2:"Freezing Moon: 2 of 3", zval:2, x:460, y:100, onCallableFunction:this.callableFunction2});
    this.myTinyObject3 = React.createElement(DrC,  {key:3, ref:this.mainref3, p1:cp3, p2:"Freezing Moon: 3 of 3", zval:1, x:890, y:100, onCallableFunction:this.callableFunction3});



    return ( [this.myTinyObject1, this.myTinyObject2, this.myTinyObject3]);
  }
}
 
//ReactDOM.render(<App/>, document.body);
/*
<DrC  ref={this.mainref1} p1={p1} p2={"Freezing Moon: 1 of 3"} onCallableFunction={this.callableFunction1}/>
<DrC  ref={this.mainref2} p1={p2} p2={"Freezing Moon: 2 of 3"} onCallableFunction={this.callableFunction2}/>
<DrC  ref={this.mainref3} p1={p3} p2={"Freezing Moon: 3 of 3"} onCallableFunction={this.callableFunction3}/>
*/




export default App;
