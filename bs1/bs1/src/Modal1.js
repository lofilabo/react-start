import React from 'react';
import {useState, setShow} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class Modal1 extends React.Component {



  constructor(props) {
    super(props);
    this.modalwindow1 = React.createRef();
  	this.func = this.func.bind(this);
  	this.modalwindow = this.modalwindow.bind(this);
  }

  componentDidMount() {
    
  
  }




  	func(){
  		console.log("I CAN HAS CHEEZBURGER");
  		//console.log(this.modalwindow);
  	}

  	modalwindow(){

  		const [show, setShow] = useState(false);
		const handleClose =() => setShow(false);
		const handleShow = () => setShow(true);

		const ref1 = React.createRef();
		const ref2 = React.createRef();
		const refM = React.createRef();  

		const FancyButton = React.forwardRef((props, ref1) => (
		  <Button variant="warning" ref1={ref1} className="FancyButton" onClick={this.func}>
		    {props.children}
		    
		  </Button>
		));

		const NancyButton = React.forwardRef((props, ref2) => (
		  <Button  variant="danger" ref2={ref2} className="FancyButton" onClick={handleShow}>
		    {props.children}
		  </Button>
		));

		const FancyModal = React.forwardRef((props, refM) => (
			      <Modal show={show} ref={refM} onHide={handleClose}>
			        <Modal.Header closeButton>
			          <Modal.Title>Freezing Moon</Modal.Title>
			        </Modal.Header>
			        <Modal.Body>Night of hunger, Night too Soon<br/>I please my hunger on living humans</Modal.Body>
			        <Modal.Footer>
			          <Button variant="secondary" onClick={handleClose}>
			            Close
			          </Button>
			          <Button variant="primary" onClick={handleClose}>
			            Save Changes
			          </Button>
			        </Modal.Footer>
			      </Modal>
		));

  		return(
			    <>
			    <FancyButton ref={ref1}>Click me!</FancyButton>
			    <NancyButton ref={ref2}>Click me!</NancyButton>
			    <FancyModal ref={refM} />
			    <Button variant="primary" onClick={handleShow}>Launch demo modal</Button>
			    </>
		)  		
  	}

  	render(){
  		return (<this.modalwindow/>);
	}

}

export default Modal1;