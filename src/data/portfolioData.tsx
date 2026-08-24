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
      <div className="project-description">
        <p>
          This job was quite fun for me. I got to work on projects where I got to automate things in a real operational setting, and it happened to be at my own school. The RSS is one of the most important departments holding the school together, managing everything about student records.
        </p>
        <p>
          I enjoyed making automated things using <span className="highlight-purple">Google Apps Script</span> to parse, segment, and route confidential academic records into the right departmental cloud directories, something that used to be handled manually. Since this involved real student records, I built isolated staging environments to validate changes before deployment. I also implemented defensive checks and input validation to prevent runtime failures from unpredictable or malformed data. I also got to collaborate with our school's main front-line office, the ServiceHub, where I turned manual data entry and filing tasks into automated processes.
        </p>
      </div>
    ),
  },
  {
    id: 'exp-2',
    filename: 'Media_Graphics_Assistant.md',
    title: 'Media and Graphics Assistant',
    company: 'Student Life & Learning Support (TMU)',
    skills: 'Social Media Analytics, Graphic Design, Marketing, Video Editing',
    fullDesc: (
      <div className="project-description">
        <p>
          I designed digital and print marketing assets, including posters and short-form videos, in a fast-paced environment using <span className="highlight-purple">Canva</span>, <span className="highlight-purple">VLLO</span>, and <span className="highlight-purple">Capcut</span>, and enjoyed the creative side of editing video content for our campaigns. This job led me to explore one of my creative hobbies, video editing and design, which made it so much fun to do.
        </p>
        <p>
          I worked at SLLS, one of the big campus departments, and noticed our Instagram reporting process was slow and manual, so I took the initiative to build a more streamlined system for it, which ended up saving the team time and standardizing how we tracked our metrics going forward (more project details can be found in this page's projects section).
        </p>
      </div>
    ),
  }
];

export const activities: CardItem[] = [
  {
    id: 'act-3',
    filename: 'Student_Support_Specialist.md',
    title: 'Student Support Specialist',
    company: 'Student Life & Learning Support (TMU)',
    skills: 'Google Suite, Portal Management Systems, Administration, Customer Service',
    fullDesc: (
      <div className="project-description">
        <p>
          This role had me right at the front desk of SLLS, which meant I got a lot of direct, day-to-day interaction with students, something I really enjoyed.
        </p>
        <p>
          I helped students book appointments, workshops, tests, and exams through our portal systems, and handled a good amount of email and phone communication along the way, so staying organized and quick on my feet became second nature.
        </p>
      </div>
    ),
  },
  {
    id: 'act-1',
    filename: 'PACS_Event_Lead.md',
    title: 'Event Lead',
    company: 'Practical Applications of Computer Science (PACS) TMU',
    skills: 'HTML, CSS, Event Planning, Social Media Campaigns, Team Leadership',
    fullDesc: (
      <p>Being Event Lead for PACS let me combine my creative and organizational sides, which made it fun to take on. I ran social media promotion for our Haunted House event with USSTM and saw attendance pick up because of it, while also helping design and develop the USSTM website in HTML and CSS, focused on better accessibility and navigation.</p>
    ),
  },
  {
    id: 'act-2',
    filename: 'WiM_Event_Associate.md',
    title: 'Event Associate',
    company: 'Women in Math (WiM) TMU',
    skills: 'Event Logistics, Social Media Strategy, Communication',
    fullDesc: (
      <p>With Women in Math, I handled social media promotion to get students excited about our events, and got to work directly with the Math Department's administration on logistics and budgeting, which was my first real taste of coordinating with a department rather than just a student team.</p>
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
      <div className="project-description">
        <p>
          This project came out of noticing a pattern in how my marketing team was handling reporting. Instead of watching the team pulling social media metrics manually every week, I decided to make this process automated for everyone.
        </p>

        <div className="desc-section">
          <strong>What I built:</strong>
          <p>
            Using <span className="highlight-purple">Python</span>, <span className="highlight-purple">Flask</span>, <span className="highlight-purple">Google Apps Script</span>, and <span className="highlight-purple">REST APIs</span>, I put together an ETL pipeline that pulls the raw performance data, normalizes it, and organizes everything into time-bucketed analytics that land directly onto the team's preferred document platform. I connected <span className="highlight-purple">Google Apps Script</span> to a cloud-based backend so the whole thing runs off a single button, letting anyone be able to refresh without needing to touch code.
          </p>
        </div>

        <div className="desc-section">
          <strong>Why I made the choices I did:</strong>
          <p>
            <span className="highlight-purple">Flask</span> gave me the right amount of structure without extra overhead for a tool with a single purpose, and <span className="highlight-purple">Google Suite</span> kept things familiar for the team instead of introducing something new. Parsing raw JSON responses from the <span className="highlight-purple">Graph API</span>, handling missing fields, stripping formatting artifacts from captions, and aggregating everything into standardized time windows was actually the most fun part to work through.
          </p>
        </div>
      </div>
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
      <div className="project-description">
        <p>
          Yes, that is the most typical project to exist, but it was actually one of my first client-side projects I have done to experiment with my interests. I like front end, but I wanted to see how far I could push a simple idea before reaching for a framework, so I kept this one to just <span className="highlight-purple">HTML</span>, <span className="highlight-purple">CSS</span>, and <span className="highlight-purple">JavaScript</span>.
        </p>
        <p>
          The app lets you search a city and pull up current conditions along with an hourly forecast, using <span className="highlight-purple">fetch</span> and <span className="highlight-purple">async/await</span> to call a weather <span className="highlight-purple">REST API</span>. I handled errors along the way and used <span className="highlight-purple">localStorage</span> to persist data across pages, so the experience holds together even as you move between views. On the forecast side, I worked with template literals and DOM manipulation to render everything dynamically, including formatting dates and times, converting temperatures, and calculating daily highs and lows.
        </p>
        <p>
          The part I had the most fun with was the visual layer. I added a canvas background that animates based on the time of day, and built the layout to be responsive using media queries and flex or grid, so the forecast rows scroll comfortably on mobile too.
        </p>
      </div>
    ),
  }
];
