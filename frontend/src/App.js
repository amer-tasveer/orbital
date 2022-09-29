import React,{Component} from 'react';
import './App.css';
import Header from "./components/header/header"
import Footer from './components/footer/footer'
import ReactGA from 'react-ga'

class App extends Component{


  componentDidMount(){
    ReactGA.initialize('UA-174924337-1');
    }
  render(){
    return (
      <div className="App">
        <Header></Header>
        <Footer></Footer>
      </div>
    );
  }

}

export default App;
