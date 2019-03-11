import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import moment from 'moment';

moment.locale('pt-BR');

const Transition = props => {
  return <Slide direction="up" {...props} />;
};

const renderContent = interviews => {
  if(interviews.length < 1) return <Typography>Não Possui</Typography>;
  return (
    interviews.map(interview =>
      <DialogContentText key={interview.id} id="alert-dialog-slide-description">
        <strong>Data:</strong> {moment(interview.date).format('DD/MM/YYYY')}<br/>
        <strong>Horário:</strong> {moment(interview.date).format('HH:mm')}
      </DialogContentText>
    )
  );
};

const Modal = props => {
  const {
    interviews,
    interviewData,
    openModal,
  } = props;

  return (
    <div>
      <Dialog
        open={interviews === 'open'}
        TransitionComponent={Transition}
        keepMounted
        onClose={openModal('close')}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle id="alert-dialog-slide-title">
          {"Datas Disponíveis para Entrevista"}
        </DialogTitle>
        <DialogContent>
          {renderContent(interviewData)}
        </DialogContent>
        <DialogActions>
          <Button onClick={openModal('close')} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;