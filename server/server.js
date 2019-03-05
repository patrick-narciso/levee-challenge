const app = require('./app');

app.on('start', () => {
  console.info('Application ready to serve requests.');
});

app.on('error', e => {
  console.error(e);
});

module.exports = app.listen(5000, () => {
  console.info(`Server running on: http://localhost:5000/`);
});
