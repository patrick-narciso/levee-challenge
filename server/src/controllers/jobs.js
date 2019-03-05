const R = require('ramda');
const fetchJobs = require('../helper/jobs');
const flatCacheMiddleware = require('../middlewares/cache');

module.exports = router => {
  router.get('/', flatCacheMiddleware, async (req, res, next) => {

    try {
      const response = await fetchJobs();

      res.json(response);
    } catch (err) {
      next(err);
    }
  });

  router.get('/:id', flatCacheMiddleware, async (req, res, next) => {

    try {
      const response = await fetchJobs();

      const job = R.find(R.propEq('id', parseInt(req.params.id)))(response.jobs);

      if (job) {
        res.json(job);
      } else {
        res.status(404).send({ error: 404, message: 'job not found' });
      }

    } catch (err) {
      next(err);
    }
  });
};
