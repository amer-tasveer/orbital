import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './header.css';
import Image from './orbital-pic1.svg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSticky: false, 
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const shouldBeSticky = window.pageYOffset >= 200;
        if (this.state.isSticky !== shouldBeSticky) {
            this.setState({ isSticky: shouldBeSticky });
        }
    };

    render() {
        const navbarClasses = `navbar ${this.state.isSticky ? 'sticky sticky-logo' : ''}`;

        return (
            <div>
                <div className="top-container">
                    <Link to="/">
                        <img src={Image} alt="Orbital Blog Logo" /> {/* Added alt text for accessibility */}
                    </Link>
                </div>

                <div id="navbar" className={navbarClasses}>
                    {/* Use Link components for all navigation items */}
                    <Link to="/">Home</Link>
                    <Link to="/featured">Featured</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                {/*
                    Removed BrowserRouter and Route components from here.
                    These should wrap your entire application in App.js
                    to provide a single routing context.
                */}
            </div>
        );
    }
}

export default Header;
