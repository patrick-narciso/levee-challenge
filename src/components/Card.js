/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Map from './Map';

const CardJob = (props) => {
  const {
    title,
    company,
    address,
    onSelectedJob,
    width,
    height,
  } = props;

  return (
    <JobCard width={width} height={height}>
      <CardActionArea>
        <Map
          width={width}
          height="200px"
          zoom={16}
          lat={address.coordinates.latitude}
          long={address.coordinates.longitude}/>
        <CardContent>
          <Job variant="h5" component="h2">
            {title}
          </Job>
          <Typography variant="h6" component="h3">
            {company}
          </Typography>
          <Typography component="p">
            {address.address} - {address.city} - {address.state}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ButtonCard
          onClick={onSelectedJob}
          size="large"
          variant="outlined">
          Candidatar
        </ButtonCard>
      </CardActions>
    </JobCard>
  );
};

CardJob.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  onSelectedJob: PropTypes.func.isRequired
};

const JobCard = styled(Card)`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-bottom: 15px;
  &:last-child {
   margin-bottom: 65px;
  }
`;

const Job = styled(Typography)`
  color: #00c662 !important;
  font-size: 24px !important;
  margin-top: 200px !important;
  margin-bottom: 5px !important;
`;

const ButtonCard = styled(Button)`
  width: 100%;
  color: #00c662 !important;
  border-color: #00c662 !important;
`;

export default CardJob;