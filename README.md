<h1>Jobs R' Us API</h1>

This is the API for Jobs-R-Us

This API is made using Node.js, Express, Mocha and Supertest, and the database used is PostgreSql.

It's online using Heroku and Heroku Database!

Future implementations will include a DELETE method and the ability to GET retrieve a job by ID. 


<h1>API Documentation</h1>

The link for the API is- https://thawing-fjord-73605.herokuapp.com/api/jobs

There are two methods for the endpoint. GET and POST. 

<h2>GET Request</h2>

GET request data comes in a JSON format. 
The format looks like: 
{
  id: jobs.id (this is a number),
  title: jobs.title (this is text for the job title),
  company: jobs.company (this is text),
  salary_range: jobs.salary_range (this is text),
  description: jobs.description (this is text),
  link: jobs.link (this is also text),
};

If you just map over the data and call their respective values it'll do the trick!

<h2>POST Request</h2>

The POST request accepts data in JSON format. 

The title, company, description, and link are all required for the database. 

The content-type should equal application/json

For a great example of how to POST jobs and GET jobs please see <a href="https://jobs-r-us.now.sh/">Jobs R' Us Website</a>

Here is the Jobs R' Us code- <a href="https://github.com/logantheproblemsolver/Jobs-R-Us-App">GitHub Code</a>
So you don't have to search in all the code-
<a href="https://github.com/logantheproblemsolver/Jobs-R-Us-App/blob/master/src/ViewJobs/ViewJobs.js">GET Request</a>
<a href="https://github.com/logantheproblemsolver/Jobs-R-Us-App/blob/master/src/UploadJobs/UploadJobs.js">POST Request</a>

