import React,{Component} from 'react';
import './footer.css'


class Footer extends Component{

  render(){
    return (
        <footer className="footer-wrapper">
        <div className='footer-container' >
            <div className='footer-link-container' >

                <div className='link-container'  >
                    <a href='/' className='footer-link' >Home</a>
                    <a href='/featured' className='footer-link' >Featured</a>
                    <a href='/about' className='footer-link' >About</a>
                    <a href='/contact' className='footer-link' >Contact</a>
                    <div className='copyright-container'  >
                      <div className='icon' > 
                      <i  class="las la-copyright"></i>
                      </div>
                    <label className='copyright-text'  >
                      Copyright 2022
                    </label>
                    </div>
                </div>            

            </div>
        </div>
    </footer>
    );
  }

}

export default Footer;