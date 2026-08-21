import type { ReactNode } from 'react';

export type CardItem = {
  id: string;
  filename: string;
  title: string;
  company?: string;
  skills?: ReactNode;
  shortDesc?: ReactNode;
  fullDesc: ReactNode;
  link?: string;
};

export const experiences: CardItem[] = [
  {
    id: 'exp-1',
    filename: 'Automation_Developer.md',
    title: 'Automation Developer',
    company: 'Registrarial Support Services (TMU)',
    skills: 'Google Apps Script, JavaScript, Workflow Automation, QA',
    fullDesc: (
      <p>I used Google Apps Script to parse, segment, and securely route thousands of confidential academic records into 100+ departmental cloud directories. I created projects for ServiceHub, turning manual data-entry and filing tasks into fast, automated processes that significantly cut down processing time. I also led quality assurance and system testing by setting up isolated staging environments which made sure no real data was ever at risk before anything went live. I also applied defensive programming techniques and strict error checks to prevent the system from crashing when users entered unpredictable or incomplete data.</p>
    ),
  },
  {
    id: 'exp-2',
    filename: 'Media_Graphics_Assistant.md',
    title: 'Media and Graphics Assistant',
    company: 'Student Life & Learning Support (TMU)',
    skills: 'Social Media Analytics, Graphic Design, Marketing, Video Editing',
    fullDesc: (
      <p>I designed digital and print marketing assets, including posters and short-form videos, in a fast-paced environment using Canva, and enjoyed the creative side of editing video content for our campaigns. I also noticed our Instagram reporting process was slow and manual, so I took the initiative to build a streamlined workflow using Google Apps Script, Python, and cloud infrastructure to pull performance data directly from Instagram. Cleaning and organizing that raw data into clean rows and columns ended up saving the team a lot of time and standardized how we tracked our metrics going forward.</p>
    ),
  },
  {
    id: 'exp-3',
    filename: 'Student_Support_Specialist.md',
    title: 'Student Support Specialist',
    company: 'Student Life & Learning Support (TMU)',
    skills: 'Google Suite, Portal Management Systems, Administration, Customer Service',
    fullDesc: (
      <p>I delivered administrative support for the Student Life & Learning Support reception, using portal management systems to ensure smooth day-to-day operations. I assisted students with appointment, workshop, test, and exam bookings through these portal systems, while managing email and phone communications with proficiency in Google Suite.</p>
    ),
  }
];

export const activities: CardItem[] = [
  {
    id: 'act-1',
    filename: 'PACS_Event_Lead.md',
    title: 'Event Lead',
    company: 'Practical Applications of Computer Science (PACS) TMU',
    skills: 'HTML, CSS, Event Planning, Social Media Campaigns, Team Leadership',
    fullDesc: (
      <p>I promoted the PACS x USSTM Haunted House event through creative social media campaigns, which helped boost overall attendance. I also worked closely with a dedicated team to organize and execute events, making sure everything ran smoothly while building a strong sense of teamwork. Alongside that, I collaborated with a team to design and develop the USSTM website using HTML and CSS, focusing on improving accessibility and making navigation easier for users.</p>
    ),
  },
  {
    id: 'act-2',
    filename: 'WiM_Event_Associate.md',
    title: 'Event Associate',
    company: 'Women in Math (WiM) TMU',
    skills: 'Event Logistics, Social Media Strategy, Communication',
    fullDesc: (
      <p>I promoted WiM events through social media, encouraging student participation and engagement. I also collaborated with the Math Department's administration to coordinate event logistics and budgeting, ensuring smooth execution through effective communication and organizational skills.</p>
    ),
  }
];

export const projects: CardItem[] = [
  {
    id: 'proj-1',
    filename: 'Automated_IG_ETL.py',
    title: 'Automated Instagram Analytics ETL Pipeline',
    skills: <><span className="highlight-blue">Python</span>, REST API, <span className="highlight-green">Flask</span>, Cloud Platform, Apps Script</>,
    shortDesc: 'Automated ETL pipeline for Instagram performance data using Python and Flask.',
    link: 'https://github.com/smmgomes/metrics-automation',
    fullDesc: (
      <>
        <p>Designed and deployed an <span className="highlight">automated ETL pipeline</span> to collect, clean, and analyze Instagram performance data using <span className="highlight-blue">Python</span>, <span className="highlight-green">Flask</span>, and the <span className="highlight-purple">Instagram Graph API</span>, delivering structured, time-bucketed analytics in Google Sheets.</p>
        <p>Streamlined manual reporting workflows by integrating <span className="highlight">Google Apps Script</span> with a cloud-hosted backend.</p>
      </>
    ),
  },
  {
    id: 'proj-2',
    filename: 'Responsive_Weather_App.html',
    title: 'Responsive Weather Web-App',
    skills: <><span className="highlight-blue">HTML, CSS, JavaScript</span>, REST API, Netlify</>,
    shortDesc: 'Responsive multi-page weather web application using HTML, CSS, and JS.',
    link: 'https://github.com/smmgomes/WeatherApplication',
    fullDesc: (
      <>
        <p>Built a <span className="highlight">responsive weather web application</span> enabling users to search cities and view current conditions and hourly forecasts.</p>
        <p>Integrated <span className="highlight-purple">REST API calls</span> using <span className="highlight-blue">Fetch</span> and <span className="highlight-blue">async/await</span>, implemented error handling, and persisted data across pages using <span className="highlight-green">localStorage</span>.</p>
      </>
    ),
  }
];
