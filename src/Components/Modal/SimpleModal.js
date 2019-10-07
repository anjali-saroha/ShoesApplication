import React from 'react';
import ReactDOM from 'react-dom';
import App from "../../App";
import Modal from 'react-modal';
 import Login from "../Login/Login";
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
  }
};

Modal.setAppElement(App);
 
class SimpleModal extends React.Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div>
        <i className="fa fa-user-circle fa-2x"  aria-hidden="true" style={{color:'white', margin: 10,cursor:"pointer"}} onClick={this.openModal}></i>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button type="button" class="close" onClick={this.closeModal}>
          <span aria-hidden="true">&times;</span>
        </button>
       <Login></Login>
        </Modal>
      </div>
    );
  }
}
export default SimpleModal;