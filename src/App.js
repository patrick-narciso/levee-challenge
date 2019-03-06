import React from 'react';
import CardJob from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <CardJob/>
      <Footer/>
    </div>
  );
};

export default App;
