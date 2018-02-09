function initialState() {
  return(
    {
      "allJobs": [
        {
          "id": 1,
          "name": "Developer",
          "location": "Redding, CA",
          "company_name": "Photofeed"
        },
        {
          "id": 2,
          "name": "Marketing Manager",
          "location": "San Jose, CA",
          "company_name": "Eayo"
        },
        {
          "id": 1,
          "name": "Software Engineer",
          "location": "Los Angeles, CA",
          "company_name": "Feedbug"
        }
      ],
      "errors": [],
      "jobs": {
        "fetching": false,
        "results": []
      },
      "activeRole": "Development",
      "activeType": "Full Time"
    }
  );
}
