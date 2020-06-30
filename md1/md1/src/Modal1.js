import React from 'react';
import ReactDOM from 'react-dom'; 
import './modal.css';
import Button from 'react-bootstrap/Button';
//import Modal from 'react-bootstrap/Modal';
//import 'bootstrap/dist/css/bootstrap.min.css';

class Modal1 extends React.Component {
  //state = { show: false }

    constructor(){
        super();
        this.state = {
            show : false
        }
    }

  showModal = () => {
    this.setState({ show: true });
  }
  
  hideModal = () => {
    this.setState({ show: false });
  }
    
  render() {
    return (
      <main>
        <h1>React Modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal} >
          <p>Modal</p>
          <p>Data</p>
        </Modal>
        <Button type='button' onClick={this.showModal}>Open</Button>
      </main>
    )
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        {children}
        <Button
          onClick={handleClose}
        >
          Close
        </Button>
      </section>
    </div>
  );
};


const container = document.createElement('div');
document.body.appendChild(container);

//use this render function to have this module render itself.
//(there is another one in index.js that will render the module again!!)
ReactDOM.render(<Modal1 />, container);

export default Modal1;
