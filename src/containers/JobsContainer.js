/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { selectJobById } from '../actions';
import CardJob from '../components/Card';

const JobsContainer = (props) => {
  const { jobs, selectJobById } = props;
  return (
    <Container>
      {jobs.map(job =>
        <CardJob
          key={job.id}
          width={400}
          height={400}
          title={job.title}
          company={job.company_name}
          address={job.address}
          onSelectedJob={() => selectJobById(job.id)}/>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items-center;
  margin-top: 100px;
  max-width: 1280px;
`;

const mapStateToProps = state => ({
  jobs: state.jobs
});

export default connect(mapStateToProps, { selectJobById })(JobsContainer);

