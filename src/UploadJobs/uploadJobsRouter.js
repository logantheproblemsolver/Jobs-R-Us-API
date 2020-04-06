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
  title: xss(jobs.title),
  company: xss(jobs.company),
  salary_range: jobs.salary_range,
  description: xss(jobs.description),
  link: xss(jobs.link),
});

uploadJobsRouter
  .route('/api/uploadjobs')
  .post(bodyParser, (req, res, next) => {
    const { title, company, salary_range, description, link } = req.body;

    const jobs = { title, company, salary_range, description, link } 

    const serializejobs = (jobs) => ({
      title: xss(jobs.title),
      company: xss(jobs.company),
      salary_range: jobs.salary_range,
      description: xss(jobs.description),
      link: xss(jobs.link),
    });

    logger.info(`Job with id ${jobs.id} created`)

    UploadJobs.insertJobs(req.app.get("db"), jobs)
    .then((insertedJobs) => {
      res
        .status(201)
        .location(`http://localhost:8000/viewjobs/${jobs.id}`)
        .json(serializejobs(insertedJobs));
    })
    .catch(next);
  })



module.exports = uploadJobsRouter;

// const express = require("express");
// const { v4: uuidv4 } = require("uuid");
// const logger = require("../logger");
// const xss = require("xss");
// const { isWebUri } = require("valid-url");
// const job = require("./jobData");
// const UploadJobs = require("./uploadJobsService");

// const uploadJobsRouter = express.Router();
// const bodyParser = express.json();

// uploadJobsRouter
//   .route("/api/uploadjobs")
//   .post(bodyParser, (req, res, next) => {
//     console.log(req.body);
//     const { title, company, salary_range, description, link } = req.body;

//     const jobs = { title, company, salary_range, description, link };

//     UploadJobs.insertJobs(req.app.get("db"), jobs)
//       .then((insertedJobs) => {
//         res
//           .status(201)
//           .location(`http://localhost:8000/viewjobs/${jobs.id}`)
//           .json(insertedJobs);
//       })
//       .catch(next);
// });

// module.exports = uploadJobsRouter;
