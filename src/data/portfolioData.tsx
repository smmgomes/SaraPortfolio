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
    skills: 'Google Apps Script, JavaScript, Automation, Bug Fixing',
    fullDesc: (
      <ul>
        <li>Optimized and automated current operational processes by editing Google Apps Scripts to create mail merges and automate forms.</li>
        <li>Automated employee number tracking for ServiceHub, enabling faster reporting for the team.</li>
        <li>Fixed bugs across the existing codebase to improve the reliability of current operational processes.</li>
      </ul>
    ),
  },
  {
    id: 'exp-2',
    filename: 'Media_Graphics_Assistant.md',
    title: 'Media and Graphics Assistant',
    company: 'Student Life & Learning Support (TMU)',
    skills: 'Canva, Social Media Analytics, Graphic Design, Reporting',
    fullDesc: (
      <ul>
        <li>Designed digital and print marketing assets including posters and short-form videos within a fast-paced environment.</li>
        <li>Supported production and management of social media campaigns across Instagram and TikTok, contributing to 65,000+ total views.</li>
        <li>Engineered a streamlined Instagram reporting workflow that standardized performance metrics and shortened reporting turnaround time.</li>
      </ul>
    ),
  },
  {
    id: 'exp-3',
    filename: 'Student_Support_Specialist.md',
    title: 'Student Support Specialist',
    company: 'Student Life & Learning Support (TMU)',
    skills: 'Google Suite, Portal Management Systems, Communication',
    fullDesc: (
      <ul>
        <li>Delivered administrative support for the Student Life & Learning Support reception, utilizing portal management systems to ensure smooth operations.</li>
        <li>Assisted students with appointment, workshop, test, and exam bookings via portal systems, managing email and phone communications with proficiency in Google Suite.</li>
        <li>Coordinated appointment schedules, resolving conflicts and delays effectively through strong communication and interpersonal skills.</li>
      </ul>
    ),
  }
];

export const activities: CardItem[] = [
  {
    id: 'act-1',
    filename: 'PACS_Event_Lead.md',
    title: 'Event Lead',
    company: 'Practical Applications of Computer Science (PACS) TMU',
    skills: 'Event Planning, Social Media Campaigns, Team Leadership',
    fullDesc: (
      <ul>
        <li>Promoted PACS x USSTM Haunted House event through creative social media campaigns, boosting attendance.</li>
        <li>Collaborated with a dedicated team to organize and execute events, ensuring seamless coordination and fostering a strong teamwork environment.</li>
      </ul>
    ),
  },
  {
    id: 'act-2',
    filename: 'WiM_Event_Associate.md',
    title: 'Event Associate',
    company: 'Women in Math (WiM) TMU',
    skills: 'Event Logistics, Social Media Strategy, Communication',
    fullDesc: (
      <ul>
        <li>Promoted WiM events through social media, encouraging student participation and engagement.</li>
        <li>Collaborated with the Math Department\'s administration to coordinate event logistics and budgeting, ensuring smooth execution through effective communication and organizational skills.</li>
      </ul>
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
