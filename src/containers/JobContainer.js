/* eslint-disable camelcase */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import Typography from '@material-ui/core/Typography';
import Button from '../components/Button';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Map from '../components/Map';
import Modal from '../components/Modal';
import { openModalInterviews } from '../actions';


const renderBenefits = (benefits) => {
  const {
    career_plan,
    dental_plan,
    healthcare_plan,
    meal_ticket,
    transit_voucher
  } = benefits;

  return (
    <>
      <Typography>Plano de Carreira: {career_plan ? 'Sim' : 'Não'}</Typography>
      <Typography>Plano Odontológico: {dental_plan ? 'Sim' : 'Não'}</Typography>
      <Typography>Plano de Saúde: {healthcare_plan ? 'Sim' : 'Não'}</Typography>
      <Typography>Vale-Refeição: {meal_ticket ? 'Sim' : 'Não'}</Typography>
      <Typography>Vale-Transporte: {transit_voucher ? 'Sim' : 'Não'}</Typography>
    </>
  )

};

const JobContainer = (props) => {
  const {
    job,
    interviews,
    showHideInterviews,
    location,
  } = props;
  const { state } = location;
  const { id } = state;

  return (
    <>
      <Header/>
      <ReactPlaceholder
        showLoadingAnimation
        ready={job.id === id}
        type="text"
        color="#E0E0E0"
        rows={11}>
        <>
          {job ?
          <Container>
            <Map
              width="100%"
              height={358}
              lat={job.address.coordinates.latitude}
              long={job.address.coordinates.longitude}
              zoom={16}/>
              <Content>
                <Modal
                  interviewData={job.interviews}
                  interviews={interviews}
                  openModal={showHideInterviews}/>
                <Title variant="h4">{job.title}</Title>
                <Typography variant="h5">{job.company_name}</Typography>
                <Typography>{job.address.address} - {job.address.city} - {job.address.state}</Typography>
                <About variant="h6">Sobre essa vaga</About>
                <Typography><strong>Descrição:</strong></Typography>
                <Typography>{job.description}</Typography>
                {renderBenefits(job.benefits)}
              </Content>
            <Interviews
              size="large"
              variant="outlined"
              onClick={showHideInterviews('open')}>
              Datas Para Entrevista
            </Interviews>
          </Container> : null}
        </>
      </ReactPlaceholder>
      <Footer/>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-bottom: 15px;
`;

const About = styled(Typography)`
  margin: 15px 0 !important;
  color: #00c662 !important;
`;

const Title = styled(Typography)`
  padding-top: 370px;
  color: #00c662 !important;
`;

const Interviews = styled(Button)`
  @media(min-width: 768px) {
    align-self: center;
  }
`;

const mapStateToProps = state => ({
  job: state.job,
  interviews: state.interviews,
});

const mapDispatchToProps = dispatch => ({
  showHideInterviews(prop) {
    return () => {
      dispatch(openModalInterviews(prop));
    };
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(JobContainer);