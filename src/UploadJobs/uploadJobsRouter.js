const express = require('express');
const { v4: uuidv4 } = require('uuid');
const logger = require('../logger');
const xss = require('xss');
const {isWebUri} = require('valid-url');
const job = require('./jobData')
const UploadJobs = require('./uploadJobsService')

const uploadJobsRouter = express.Router();
const bodyParser = express.json();

const serializejobs = (jobs) => ({
  id: jobs.id,
  title: xss(jobs.title),
  company: xss(jobs.company),
  salary_range: jobs.salary_range,
  description: xss(jobs.description),
  link: xss(jobs.link),
});

uploadJobsRouter
  .route('/api/uploadjobs')
  .post(bodyParser, (req, res, next) => {
    // for (const field of ['title', 'company', 'description', 'link']) {
    //   logger.error(`${field} is required`);
    //   return res.status(400).send(`${field} is required`);
    // }

    const { title, company, salary_range, description, link } = req.body;

    // if (!isWebUri(link)) {
    //   logger.error(`Invalid link ${link} is supplied`)
    //   return res.status(400).send(`'link' is required`)
    // }

    const jobs = { id: uuidv4(), title, company, salary_range, description, link } 

    // job.push(jobs)

    logger.info(`Job with id ${jobs.id} created`)

    UploadJobs.insertJobs(
      req.app.get('db'),
      serializejobs
    )
      .then((serializejobs) => {
        res 
          .status(201)
          .location(`http://localhost:8000/viewjobs/${jobs.id}`)
          .json(serializejobs(jobs))
      })
      .catch(next)
  })

module.exports = uploadJobsRouter;
