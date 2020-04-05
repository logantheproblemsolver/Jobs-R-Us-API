const knex = require('knex');
const app = require('../src/app');
const makeJobsArray = require('./jobs-fixtures.js');

describe('Show all jobs endpoint', () => {
  let db;

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());

  beforeEach('cleanup', () => db('jobs').truncate());

  afterEach('cleanup', () => db('jobs').truncate());

  describe('GET /api/viewjobs', () => {
    context('Given no jobs', () => {
      it('responds with 200 and an empty list', () => supertest(app)
        .get('/api/viewjobs')
        .expect(200, []));
    });
    context('Given there are jobs', () => {
      const testJobs = makeJobsArray();

      beforeEach('insert jobs', () => db
        .into('jobs')
        .insert(testJobs)
      );

      it('responds with 200 and the jobs', () => supertest(app)
        .get('/api/viewjobs')
        .expect(200, testJobs)
        )
      
    })
  });
});