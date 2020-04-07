const JobsService = {
    getAllJobs(knex) {
      return knex
        .select('*')
        .from('jobs')
        .orderBy('id', 'desc');
    },
  insertJobs(knex, newJobPosting) {
    return knex
      .insert(newJobPosting)
      .into("jobs")
      .returning("*")
      .then((rows) => rows[0]);
  },
};

module.exports = JobsService;
