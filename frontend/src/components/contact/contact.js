import React,{Component} from 'react';
import './contact.css'
import ReactGA from 'react-ga'

class Contact extends Component{

  componentDidMount(){
    ReactGA.initialize('UA-174924337-1');
    ReactGA.pageview(this.props.location.pathname)  }
  render(){
    return (
      <div className='wrapper' >
       
     <h1 className='main-header-text'  >
Get In Touch
     </h1>
     <div className='middle'  >
       <text className='name-text'  >Email</text>
     <input className='name' placeholder='Eg. Username@123.com' >
     </input>
     <text className='name-text'  >Title</text>

     <input className='name' placeholder='Eg. Talks about collaborations' >
     </input>
     <text className='name-text'  >Message</text>

     <textarea className='textarea' placeholder='Type here...' >
     </textarea>
     <button className='submitbtn'  >
       Submit
     </button>
     </div>
  
      </div>
    );
  }

}

export default Contact;