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
  it(`responds with 400 missing 'title' if not supplied`, () => {
    const newJobMissingTitle = {
      // title: 'test-title',
      company: 'test-company',
      description: 'test descriotion',
      link: 'https://test.com',
    }
    return supertest(app)
      .post(`/api/uploadjobs`)
      .send(newJobMissingTitle)
      .expect(400, {
        error: { message: `'title' is required` }
      })
  })

  it(`responds with 400 missing 'company' if not supplied`, () => {
    const newJobMissingCompany = {
            title: 'test-title',
            // company: 'test-company',
            description: 'test descriotion',
            link: 'https://test.com',
    }
    return supertest(app)
      .post(`/api/uploadjobs`)
      .send(newJobMissingCompany)
      .expect(400, {
        error: { message: `'company' is required` }
      })
  })

  it(`responds with 400 missing 'title' if not supplied`, () => {
    const newJobMissingDescription = {
      title: 'test-title',
      company: 'test-company',
      // description: 'test descriotion',
      link: 'https://test.com',
    }
    return supertest(app)
      .post(`/api/uploadjobs`)
      .send(newJobMissingDescription)
      .expect(400, {
        error: { message: `'description' is required` }
      })
  })

  it(`responds with 400 missing 'link' if not supplied`, () => {
    const newJobMissingLink = {
      title: 'test-title',
      company: 'test-company',
      description: 'test descriotion',
      // link: 'https://test.com',
    }
    return supertest(app)
      .post(`/api/uploadjobs`)
      .send(newJobMissingLink)
      .expect(400, {
        error: { message: `'link' is required` }
      })
  })
  

  it(`responds with 400 invalid 'url' if not a valid URL`, () => {
    const newJobInvalidLink = {
      title: 'test-title',
      company: 'test-company',
      description: 'test descriotion',
      link: 'https://testcom',
    }
    return supertest(app)
      .post(`/api/uploadjobs`)
      .send(newJobInvalidLink)
      .expect(400, {
        error: { message: `'url' must be a valid URL` }
      })
  })

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
        expect(res.body.title).to.eql(newBookmark.title)
        expect(res.body.url).to.eql(newBookmark.url)
        expect(res.body.description).to.eql(newBookmark.description)
        expect(res.body.rating).to.eql(newBookmark.rating)
        expect(res.body).to.have.property('id')
        expect(res.headers.location).to.eql(`/api/bookmarks/${res.body.id}`)
      })
  });
});
});