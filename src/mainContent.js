import React , {Component} from 'react';

class ContentBody extends Component {
    render() {
      return (
      <div className="card">
          <p></p>
          <div className="contentImg">
          <img
          style={{width:'100%',height:'auto'}}
          src={this.props.value.url} alt="new"/>
          </div>
          <p>{this.props.value.body}</p>
          <div className="actions">
          <i className="fa fa-thumbs-up"></i>
          <i className="fas fa-comments"></i>
          </div>
          </div>
          
      );
    }
  }
  export default ContentBody;