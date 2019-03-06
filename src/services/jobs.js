import client from './config/client';

export const getJobs = () => {
  return client.get('/jobs').then(response => {
    return response.data;
  });
};

export const getJob = (jobId) => {
  return client.get(`jobs/${jobId}`).then(response => {
    return response.data;
  })
};