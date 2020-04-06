const UploadJobs = {
  insertJobs(knex, newJobPosting) {
    return knex
      .insert(newJobPosting)
      .into("jobs")
      .returning("*")
      .then((rows) => rows[0]);
  },
};

module.exports = UploadJobs;
