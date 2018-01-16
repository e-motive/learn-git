import React, { Component } from 'react';

//includes
import './Assets/css/main.min.css'
//components
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homePage';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Header />

        <HomePage />

        <Footer />

      </div>
    );
  }
}

export default App;


