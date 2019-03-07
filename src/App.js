import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import JobsContainer from './containers/JobsContainer';

const App = () => {
  return (
    <div>
      <Header/>
      <JobsContainer/>
      <Footer/>
    </div>
  );
};

export default App;
