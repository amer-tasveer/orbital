import React, { Component } from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

// Import all  page components
import Header from "./components/header/header";
import Footer from './components/footer/footer';
import Landing from './components/landing/landing';
import About from './components/about/about';
import ArticlePost from './components/blog/post';
import FeaturedPost from './components/blog/post_featured';
import Contact from './components/contact/contact';
import FeaturedList from './components/blog/postlist';

class App extends Component {
    componentDidMount() {
        ReactGA.initialize('UA-174924337-1');
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header />

                    <Switch>
                        <Route path='/' exact component={Landing} />

                        <Route path='/featured' exact component={FeaturedList} />

                        <Route path='/featured/:slug' component={FeaturedPost} />

                        <Route path='/articles/:slug' component={ArticlePost} />

                        <Route path='/about' exact component={About} />

                        <Route path='/contact' exact component={Contact} />

                        <Route component={() => (
                            <div className="not-found-container">
                                <h1>404 - Page Not Found</h1>
                                <p>Sorry, the page you are looking for does not exist.</p>
                                <Link to="/">Go to Home</Link>
                            </div>
                        )} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;