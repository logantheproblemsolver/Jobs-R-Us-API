// This is the connection for uploading information to the database
const UploadJobs = {
  insertJobs(knex, newJobPosting) {
    return knex('jobs')
      .returning("*")
      .insert(newJobPosting)
      .then((rows) => rows[0]);
  },
};

module.exports = UploadJobs;
