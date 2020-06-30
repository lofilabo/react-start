import React from 'react'
import { Button,Modal } from 'react-bootstrap'
import ReactDOM from 'react-dom'; import 'bootstrap/dist/css/bootstrap.min.css';
class Modal2 extends React.Component{

    constructor(){
        super();
        this.state = {
            showHide : false
        }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    render(){
        return(
            <div>
                <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                    Launch demo modal
                </Button>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title>Funeral Fog</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                            Every time this year<br/>
                            This dark fog will appear<br/>
                            Up from the tombs it comes<br/>
                            To take one more life that Can be near.<br/>
                            In the middle of Transylvania<br/>
                            All natural life has for a long<br/>
                            Time ago gone, its thin and so<br/>
                            Beautiful but also so dark and Mysterious.<br/>
                            Once again the priest is messing<br/>
                            May the god bless us all.<br/>
                            The fog is here again<br/>
                            That'll complete this funeral.<br/>
                            From a place empty of life.<br/>
                            Only dead trees are growing here<br/>
                            As it comes from a far<br/>
                            Only dead trees are growing here<br/>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => this.handleModalShowHide()}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
    
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<Modal2 />, container);
export default Modal2;