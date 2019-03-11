/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { getAllJobs } from '../actions/index';
import { RECEIVE_JOBS } from '../constants/ActionTypes';
import jobsMock from '../services/__mocks__/jobs';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('getAllJobs action', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates RECEIVE_JOBS after successfuly fetching jobs', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: jobsMock,
      });
    });

    const expectedAction = { type: RECEIVE_JOBS, jobs: jobsMock.jobs };

    const store = mockStore({
      jobs: '',
      job: '',
      interviews: 'close',
    });

    return store.dispatch(getAllJobs()).then(() => {
      // return of async actions
      const actions = store.getActions();
      expect(actions[0]).toEqual(expectedAction);
    });
  });
});