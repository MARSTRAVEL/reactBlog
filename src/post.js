import React , {Component} from 'react';
import firebase from './firebase';
import UpLoadImg from './upLoadImg';

class Post extends Component {
    constructor(){
      super();
      this.state = {
        body: '',
        url: ''
      };
      this.onInputChange = this.onInputChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    setUrl(url){
      this.setState({'url': url});
    }
   onInputChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    });
   }
   onSubmit(e){
    e.preventDefault();
    const postsinfor = firebase.database().ref('posts');
    const post = {
      body: this.state.body,
      url: this.state.url
    }
    /// clean textarea
    this.refs.body.value = '';
    postsinfor.push(post);
    
   }

    render(){
      return(
        <div className="container">
        <form className="form">
        <textarea
         className ="modal-body-textarea" type="text" rows ="15" cols="85" name="body" placeholder="Whats in you mind??"
          onChange={this.onInputChange} ref="body"
          />
          <div className="button-group">
            <UpLoadImg url={this.state.url} setUrl={this.setUrl.bind(this)}></UpLoadImg>
            <button className = "postButton" onClick={this.onSubmit}>Post</button>
            </div>
        </form>
      </div>
      )
    }
   }
  
  export default Post;
  