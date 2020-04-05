// this is connecting to the database, future code will connect to find the ID
const ViewJobs = {
  getAllJobs(knex) {
    return knex
      .select('*')
      .from('jobs')
      .orderBy('id', 'desc');
  },
  
};

module.exports = ViewJobs;
