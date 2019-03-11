import { getJob, getJobs } from '../services/jobs';
import * as types from '../constants/ActionTypes';

const receiveJobs = jobs => ({
  type: types.RECEIVE_JOBS,
  jobs
});

export const getAllJobs = () => dispatch => {
  return getJobs().then(jobs => dispatch(receiveJobs(jobs)));
};

const selectJob = job => ({
  type: types.SELECT_JOB,
  job
});

export const selectJobById = jobId => dispatch => {
  return getJob(jobId).then(job => dispatch(selectJob(job)));
};

const showInterviews = interviews => ({
  type: types.SHOW_INTERVIEWS,
  interviews,
});

export const openModalInterviews = interviews => dispatch => {
  return dispatch(showInterviews(interviews));
};