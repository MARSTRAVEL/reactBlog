import React, { Component } from "react";
// import ReactDOM from "react-dom";
import Modal from './modal'
import './postForm.css';

class PostTextArea extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        }
    }

    openModalHandler = () => {
        this.setState({
            showModal: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            showModal: false
        });
    }
      render(){
          return(<div className="postDiv">
                  <input  className="post" type="text" placeholder="post.." onClick={this.openModalHandler}/>
                  <Modal
                    className="modal"
                    show={this.state.showModal}
                    close={this.closeModalHandler}>
                </Modal>
          </div>
          )
      };
}
export default PostTextArea;