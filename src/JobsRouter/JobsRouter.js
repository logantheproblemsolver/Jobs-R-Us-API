const express = require('express');
const logger = require('../logger');
const xss = require('xss');
const JobsService = require('./JobsService')

const JobsRouter = express.Router();
const bodyParser = express.json();

const serializejobs = (jobs) => ({
  title: xss(jobs.title),
  company: xss(jobs.company),
  salary_range: jobs.salary_range,
  description: xss(jobs.description),
  link: xss(jobs.link),
});

JobsRouter
  .route('/api/jobs')
  .get((req, res, next) => {
    JobsService.getAllJobs(req.app.get('db'))
      .then((jobs) => {
        res 
          .json(jobs.map(serializejobs));
      })
      .catch(next);
  })
  .post(bodyParser, (req, res, next) => {
    const { title, company, salary_range, description, link } = req.body;

    const jobs = { title, company, salary_range, description, link } 


    logger.info(`Job with id ${jobs.id} created`)

    JobsService.insertJobs(req.app.get("db"), jobs)
    .then((insertedJobs) => {
      res
        .status(201)
        .location(`http://localhost:8000/viewjobs/${jobs.id}`)
        .json(serializejobs(insertedJobs));
    })
    .catch(next);
  })



module.exports = JobsRouter;
