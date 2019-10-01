import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component{
    render(){
      return(
            <div>
                <nav>
          <ul>
            <Link to="/blog">
            <li>Blog</li>
            </Link>
            <Link to="/login">
            <li>Login</li>
            </Link>
            <Link to="/signup">
            <li>Signup</li>
            </Link>
            <Link to="/post">
            <li>Post</li>
            </Link>
            </ul>
      </nav>
            </div>
      );
    }
  };

  export default Nav;