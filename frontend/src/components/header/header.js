import React,{Component} from "react";
import Landing from "../landing/landing"
import About from '../about/about'
import Art from '../blog/post'
import Featured from '../blog/post_featured'
import Contact from '../contact/contact'
import FeaturedList from '../blog/postlist'
import './header.css'
import Image from './orbital-pic1.svg'
import {BrowserRouter as Router,Route,Link,withRouter,useLocation} from'react-router-dom';


class Header extends Component {

constructor(props){
    super( props );

    this.handleScroll=this.handleScroll.bind(this)

}


componentDidMount(){
    window.addEventListener('scroll', this.handleScroll,true);
}

componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll(){
    var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
    if (window.pageYOffset >= 200) {
        navbar.classList.add("sticky")
        navbar.classList.add("sticky-logo")

      } else {
        navbar.classList.remove("sticky");
      }
}

rendernav(){
    return (
        <div>
            <div class="top-container">
              <a  href="/" >
              <img src={Image}/>  

              </a>

</div>

  <div id="navbar">
    <a  href="/">Home</a>
    <a href="/featured">Featured</a>
    <a href="/about">About Us</a>    
    <a href="/contact">Contact</a>
  </div>
  
  
        </div>
          )
}

render(){
  return (
    <Router>
    {this.rendernav()}
    

    <Route path='/' exact component={Landing} />
    <Route path='/articles/:slug' exact component={Art} />
    <Route path='/featured/:slug' exact component={Featured} />
    <Route path='/featured/' exact component={FeaturedList} />
    <Route path='/about' exact component={About} />
    <Route path='/contact' exact component={Contact} />



    </Router>
        )
}
  
}

export default Header;