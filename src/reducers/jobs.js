import { RECEIVE_JOBS, SELECT_JOB, SHOW_INTERVIEWS } from '../constants/ActionTypes';

const INITIAL_STATE = {
  jobs: [],
  job: '',
  interviews: 'close',
};

const reducer = (state = INITIAL_STATE, action) => {
  let newState;
  let jobs;
  switch (action.type) {
    case RECEIVE_JOBS:
      jobs = state.jobs.concat(action.jobs);
      newState = {
        ...state,
        jobs,
      };
      break;
    case SELECT_JOB:
      newState = {
        ...state,
        job: action.job,
      };
      break;
    case SHOW_INTERVIEWS:
      newState = {
        ...state,
        interviews: action.interviews,
      };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};

export default reducer;