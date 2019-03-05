const axios = require('axios');
const R = require('ramda');

const fetchJobs = async () => {
  const requestUrl = 'https://www.getpostman.com/collections/1b5acf35a2cb2f510a62';
  const response = await axios.get(requestUrl);
  const jobsData = R.find(R.take(1))(response.data.requests);
  const { url } = jobsData;
  const header = R.find(R.take(1))(jobsData.headerData);
  const jobs = await axios.get(url, {
    headers: { 'Authorization': R.path(['value'], header) }
  });

  return {
    jobs: R.path(['collection', '_embedded'], jobs.data),
    previous: R.path(['collection', '_links', 'previous'], jobs.data),
    next: R.path(['collection', '_links', 'next'], jobs.data),
    url
  }

};

module.exports = fetchJobs;