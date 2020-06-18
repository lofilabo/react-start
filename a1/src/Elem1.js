
import React from 'react';

//const name = 'Necro Butcher';
//const element = <h1>Hello, {name}</h1>;

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }

  componentDidMount() {
  	console.log("roots of evilness");
  }

}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Lord',
  lastName: 'Nagash'
};
/*
const element = (

  <div>
    <h1>Hello!, {getGreeting(user)}</h1>
    <h2>Good to see you here.</h2>
  </div>
);
*/

const elementl = <Welcome name="Nighogg" />;

const Elem1 = () => {
  
    console.log('Elem 1');
    return elementl;
    //return getGreeting(user);
};

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
export default Elem1;


