import React , {Component} from 'react';
import firebase from './firebase';
// import FileUploader from "react-firebase-file-uploader";
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';

class UpLoadImg extends Component{
    constructor(props){
        super();
        this.state = {
            isUploading: false,
            progress: 0,
            avatarURL: ""
          };
          this.setUrl =(url)=>{
              this.setState({ avatarURL: url });
              props.setUrl(url);
          };
    }
      handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        firebase
          .storage()
          .ref("images")
          .child(filename)
          .getDownloadURL()
          .then(url =>this.setUrl(url)
           );
      };
     
      render() {
        return (
<CustomUploadButton
    accept="image/*"
    storageRef={firebase.storage().ref('images')}
    onUploadStart={this.handleUploadStart}
    onUploadError={this.handleUploadError}
    onUploadSuccess={this.handleUploadSuccess}
    onProgress={this.handleProgress}
    style={{
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: 6, borderRadius: 4
    }}
  >
    Picture 
  </CustomUploadButton>
        );
      }
}

export default UpLoadImg;