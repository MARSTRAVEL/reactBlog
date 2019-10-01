import React, { Component } from 'react';
import './modal.css';
import Post from './post';

class modal extends Component {
    constructor(props){
        super();
        this.state={};
    }
    render(){
        return (
            <div className="modal-wrapper"
                style={{
                    transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                    <div className="modal-header">
                    <h3>Whats Up Man?</h3>
                    <span className="close-modal-btn" onClick={this.props.close}>×</span>
                </div>
                <div className="modal-body">
                    <Post state = {this.props.show}/>
                </div>
                    </div>
    )
    }
}

export default modal;
