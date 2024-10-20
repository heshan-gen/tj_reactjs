// jobList.tsx

interface Job {
  id: number;
  title: string;
  company: string;
}

const generateJobList = (count: number): Job[] => {
  const titles = [
    "Software Engineer",
    "Product Manager",
    "Data Scientist",
    "UI/UX Designer",
    "DevOps Engineer",
    "Project Coordinator",
    "Business Analyst",
    "Systems Administrator",
    "Network Engineer",
    "Full Stack Developer",
    "Assistant Sales Manager | Senior Executive - Sales Operations",
    "Technical Support Specialist",
    "QA Engineer",
    "Database Administrator",
    "Cybersecurity Analyst",
    "Cloud Engineer",
    "SEO Specialist",
    "Content Strategist",
    "Marketing Manager",
    "Sales Executive"
  ];

  const companies = [
    "Company A",
    "Company B",
    "Company C",
    "Company D",
    "Company E",
    "Company F",
    "Company G",
    "Company H",
    "Company I",
    "Company J",
    "Company K",
    "Company L",
    "Company M",
    "Company N",
    "Company O",
    "Company P",
    "Company Q",
    "Company R",
    "Company S",
    "Company T"
  ];

  const jobList: Job[] = [];

  for (let i = 1; i <= count; i++) {
    const title = titles[i % titles.length];
    const company = companies[i % companies.length];
    jobList.push({ id: i, title, company });
  }

  return jobList;
};

export const jobList: Job[] = generateJobList(500);
