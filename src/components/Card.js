import React from 'react';
import { styled } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Map from './Map';

const CardJob = () => {
  return (
    <JobCard>
      <CardActionArea>
        <Map width="400px" height="100px"/>
        <CardContent>
          <Job gutterBottom variant="h5" component="h2">
            Garçom Hospitalar
          </Job>
          <Typography gutterBottom variant="h6" component="h3">
            Rede D'OR SAO LUIZ
          </Typography>
          <Typography component="p">
            Nova Iguaçu - RJ - 26215342 - 25,8 km de você
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ButtonCard
          size="large"
          variant="outlined">
          Candidatar
        </ButtonCard>
      </CardActions>
    </JobCard>
  );
};

const JobCard = styled(Card)({
  width: '400px',
});

const Job = styled(Typography)({
  color: '#00c662',
  fontSize: '24px',
  paddingTop: '75px',
  marginBottom: '5px',
});

const ButtonCard = styled(Button)({
  width: '100%',
  color: '#00c662 !important',
  borderColor: '#00c662 !important',
});

export default CardJob;