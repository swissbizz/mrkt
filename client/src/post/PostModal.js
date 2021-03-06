import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody} from 'mdbreact';
import NewPost from './NewPost'
import {isAuthenticated} from '../auth';
import '../core/MessageSender.css'

class ModalPage extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
 reload = () => window.location.reload();

 handleClose = () => {
    this.toggle();
    this.reload();
  }
  render() {
    return (
      <MDBContainer>
        {/* BUTTON */}
        <div className = "messageSender__top2" style = {{borderBottom: "none", margin: "none"}}>
            <form className>
            <input type = "text" onClick = {this.toggle} className = "messageSender__input" placeholder = {`Have something to sell, ${isAuthenticated().user.name}?`}/>
            </form>
        </div>
                {/* MODAL */}
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}   size="lg"  >
          <MDBModalBody>
              <NewPost />
              <MDBBtn className = "ml-4 primary-color-dark text-white btn-sm " style = {{borderRadius: "25px", marginTop: "-10px"}} onClick={this.handleClose}>Close</MDBBtn>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}
export default ModalPage;