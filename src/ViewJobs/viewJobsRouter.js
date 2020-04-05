const express = require('express');
const xss = require('xss');
const ViewJobs = require('./viewJobsService.js');

const viewJobsRouter = express.Router();

const serializejobs = (jobs) => ({
  id: jobs.id,
  title: xss(jobs.title),
  company: jobs.company,
  salary_range: jobs.salary_range,
  description: xss(jobs.description),
  link: xss(jobs.link),
});

// this router is the set up to view all the artwork

viewJobsRouter
  .route('/api/viewjobs')
  .get((req, res, next) => {
    ViewJobs.getAllJobs(req.app.get('db'))
      .then((jobs) => {
        res 
          .json(jobs.map(serializejobs));
      })
      .catch(next);
  });

module.exports = viewJobsRouter;
