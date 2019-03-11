/* eslint-disable no-shadow */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { selectJobById } from '../actions';
import Card from '../components/Card';

const renderJobDetails = (jobId, props) => {
  const { selectJobById, history } = props;
  setTimeout(() => selectJobById(jobId), 200);
  history.push({pathname: 'detalhes', state: {id: jobId}});
};

const JobsContainer = withRouter((props) => {
  const { jobs } = props;

  return (
    <>
      <Header/>
      <Content>
        <ReactPlaceholder
          showLoadingAnimation
          ready={jobs.length > 0}
          type="text"
          color="#E0E0E0"
          rows={10}>
          <Container>
            {jobs.map(job =>
              <Card
                key={job.id}
                width="400px"
                height="400px"
                title={job.title}
                company={job.company_name}
                address={job.address}
                onSelectedJob={() => renderJobDetails(job.id, props)}/>
            )}
          </Container>
        </ReactPlaceholder>
      </Content>
      <Footer/>
    </>
  );
});

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 15px;
  max-width: 1280px;
`;

const Content = styled.div`
  @media(min-width: 768px) {
    display: flex;
    flex: 1;
    justify-content: center;
  }
`;

const mapStateToProps = state => ({
  jobs: state.jobs
});

export default connect(mapStateToProps, { selectJobById })(JobsContainer);

