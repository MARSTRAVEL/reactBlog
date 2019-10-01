import React , {Component} from 'react';
import firebase from './firebase';
import './blog.css';
import PostTextArea from './postForm';
import ContentBody from './mainContent';
import TopNav from './topBar';

class App extends Component{
    constructor(props){
        super();
        this.state = {
          url:'',
          body: '',
          items: []
        };
      }
      componentDidMount() {
        const allPosts = firebase.database().ref('posts'); 
        allPosts.on('value', (snapshot)=>{
            let valueArr = snapshot.val();
            if(valueArr.length === null){
                allPosts.set({
                    url:'https://firebasestorage.googleapis.com/v0/b/reactblog-59d5e.appspot.com/o/images%2FScreenshot%202019-04-24%20at%2021.57.48.png?alt=media&token=c6066c05-5585-46ea-aa5c-04636d16ad43',
                    body:'Please Write Somgthing!'
                });
            }
            let newState = [];
            for(let item in valueArr){
                newState.push({
                    id:item,
                    url:valueArr[item].url,
                    body: valueArr[item].body
                 });
            }
            this.setState({items: newState});
            
        });
        
      }
      removeItem(itemId) {
        const allPosts = firebase.database().ref(`/posts/${itemId}`);
        allPosts.remove();
      }
      
    render(){
      return(
        <div className="container">
            <div className = "header">
                <TopNav></TopNav>
                <PostTextArea></PostTextArea>
            </div>
            <div className ="mainContent">
                <div className="row">
                    <div className="leftcolumn">
                    {this.state.items.map((item) => {
                        return (
                            <ContentBody key={item.id} value={{'body':item.body, 'url':item.url}}/>
                            )
                            })}
                    </div>
                    <div className="rightcolumn">
                        <div className="card">
                            <h2>HotTopic</h2>
                            <div className="HotTopicImg">
                                <img  src={process.env.PUBLIC_URL + '/wordCloud.png'}  alt="Smiley face"/>
                                </div>
                            <p>What is people is talk about!</p>
                        </div>
                        <div className = 'card'>
                            <h3>Popular Post</h3>
                            <div className="PopularPostImg">
                            <img  src={process.env.PUBLIC_URL + '/helsinki.jpg'}  alt="Smiley face"/>
                            <br></br>
                            </div>
                            <div className="PopularPostImg">
                                <img src={process.env.PUBLIC_URL + '/helsinkiTori.jpg'}  alt="Smiley face"/>
                                </div><br></br>
                            <div className="PopularPostImg">
                                <img src={process.env.PUBLIC_URL + '/helsinkiWinter.jpg'}  alt="Smiley face"/>
                                </div>
                        </div>
                        <div className="card">
                            <h3>Follow Me</h3>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>Powered by: Yunlong Liu</p>
                <p>Contact information: <a href="yunlong.a.liu@gmail.com">yunlong.a.liu@gmail.com</a>.</p></div>
            </div>
      );
    }
  };
export default App;
