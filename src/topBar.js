import React , {Component} from 'react';
class TopNav extends Component {
    constructor(props) {
          super(props);
          this.state = {};
      }
  
      handleScroll=()=> {
          this.setState({scroll: window.scrollY});
      }
    componentDidMount=()=> {
          const el = document.querySelector('nav');
          this.setState({top: el.offsetTop, height: el.offsetHeight});
          window.addEventListener('scroll', this.handleScroll);
      }
    
    componentDidUpdate=()=> {
          this.state.scroll > this.state.top ? 
              document.body.style.paddingTop = `${this.state.height}px` :
              document.body.style.paddingTop = 0;
      }
    
    render() {
      return (
        <nav className={this.state.scroll > this.state.top ? "fixed-nav" : ""}>
            <div className="topnav">
                <a className="active" href="#home"><i className="fas fa-award"></i></a>
                <input type="text" placeholder="Search.."></input>
                </div>
        </nav>
      );
    }
  }
  export default TopNav;