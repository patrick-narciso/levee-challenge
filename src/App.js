import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import JobsContainer from './containers/JobsContainer';

const App = () => {
  return (
    <Container>
      <Header/>
      <JobsContainer/>
      <Footer/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
