const knex = require('knex');
const app = require('../src/app');


describe('Upload jobs endpoint', () => {
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




describe('POST /api/uploadjobs', () => {
  it('adds a new job to the database', () => {
    const newJob = {
      title: 'test-title',
      company: 'test-company',
      description: 'test descriotion',
      link: 'https://test.com',
    }
    return supertest(app)
      .post(`/api/uploadjobs`)
      .send(newJob)
      .expect(201)
      .expect(res => {
        expect(res.body.title).to.eql(newJob.title)
        expect(res.body.company).to.eql(newJob.company)
        expect(res.body.description).to.eql(newJob.description)
        expect(res.body.link).to.eql(newJob.link)
      })
  });
});
});