function makeJobsArray() {
  return [
    {
      id: 3,
      title: 'Lead Designer', 
      company: 'Jobs-R-Us', 
      salary_range: '$50,000-60,000', 
      description: 'This role will primarily be a design role to develop future projects', 
      link: 'application.com',
    },
    {
      id: 2,
      title: 'Lead Engineer', 
      company: 'Jobs-R-Us', 
      salary_range: '$80,000-100,000', 
      description: 'This role will primarily be a role to help the development of future projects', 
      link: 'application.com'
    },
    {
      id: 1,
      title: 'Technical Support', 
      company: 'Jobs-R-Us', 
      salary_range: '$35,000-$40,000', 
      description: 'This role is designed to aid employers or applicants with any issue they might have', 
      link: 'application.com'
    },
  ]
}

module.exports = makeJobsArray;
