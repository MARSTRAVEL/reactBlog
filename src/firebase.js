import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDsSXdMa0QXJ3rd8ePGBOcj2ZiHd3j8TTA",
    authDomain: "reactblog-59d5e.firebaseapp.com",
    databaseURL: "https://reactblog-59d5e.firebaseio.com",
    projectId: "reactblog-59d5e",
    storageBucket: "reactblog-59d5e.appspot.com",
    messagingSenderId: "412553292196",
    appId: "1:412553292196:web:4a4cb6e6ac7f78b3bc3931",
    measurementId: "G-YGJLJFC2M1"
  };

 firebase.initializeApp(firebaseConfig); 
  
// const database = firebase.database().ref('/posts');
  export default firebase;