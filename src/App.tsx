import { useState } from 'react';
import { InteractiveCard } from './components/InteractiveCard';
import { ClosedFile } from './components/ClosedFile';
import { MemeModal } from './components/MemeModal';
import { experiences, activities, projects } from './data/portfolioData';
import meme1 from './assets/memes/17960f47f2fdb59d37f880535469d80f.jpg';
import meme2 from './assets/memes/29a76f5005bb4449cf8960705adc4d78.jpg';
import meme3 from './assets/memes/90cf8b3d5bf68fbce2e9156f0fd1046b.jpg';
import meme4 from './assets/memes/d0a46938c1721f54e3b236a1b61dfd54.jpg';
import meme5 from './assets/memes/0c7453b8b3f4e8854ff822b1e226bedb.jpg';
import meme6 from './assets/memes/1ea3b3f1b3b41fcc8d8493f14df65cf8.jpg';
import meme7 from './assets/memes/51ab0656e42a4224e6f0713e4207ca4d.jpg';
import meme8 from './assets/memes/c200f325d3c3712d319d341667ccae1e.jpg';
import meme9 from './assets/memes/cdb4819deb819b6fa866b6ba6cf99d7b.jpg';
import meme10 from './assets/memes/454cb2d5fa6049eddac143a8defb8c39.jpg';
import meme11 from './assets/memes/52e79e58427e1c0cdddc452b615bdeb7.jpg';
import meme12 from './assets/memes/821cf61716fddb2e7b52a58727a775ff.jpg';
import meme13 from './assets/memes/d1425b35d9226d66e591770116e586c0.jpg';
import folderSvg from './assets/folder-icon.svg';
import { SiGoogle } from 'react-icons/si';
import { FaFileWord, FaFileExcel, FaFilePowerpoint, FaFolderOpen, FaBriefcase, FaStar, FaEnvelope } from 'react-icons/fa';

const skillIcons = [
  { name: 'Python', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" style={{ width: '1em', height: '1em' }} alt="Python" /> },
  { name: 'JavaScript', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" style={{ width: '1em', height: '1em' }} alt="JavaScript" /> },
  { name: 'HTML5', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" style={{ width: '1em', height: '1em' }} alt="HTML5" /> },
  { name: 'CSS3', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" style={{ width: '1em', height: '1em' }} alt="CSS3" /> },

  { name: 'Flask', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" style={{ width: '1em', height: '1em' }} alt="Flask" /> },
  { name: 'REST API / Postman', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" style={{ width: '1em', height: '1em' }} alt="Postman" /> },
  { name: 'Git', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" style={{ width: '1em', height: '1em' }} alt="Git" /> },
  { name: 'Microsoft Word', icon: <FaFileWord color="#2B579A" /> },
  { name: 'Microsoft Excel', icon: <FaFileExcel color="#217346" /> },
  { name: 'Microsoft PowerPoint', icon: <FaFilePowerpoint color="#B7472A" /> },

  { name: 'Google Cloud', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" style={{ width: '1em', height: '1em' }} alt="Google Cloud" /> },
  { name: 'Google Apps Script', icon: <SiGoogle color="#4285F4" /> },
  { name: 'Netlify', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" style={{ width: '1em', height: '1em' }} alt="Netlify" /> },
  { name: 'GitHub', icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" style={{ width: '1em', height: '1em', filter: 'invert(1)' }} alt="GitHub" /> },
];

type CardState = 'default' | 'expanded' | 'minimized' | 'closed';

function App() {
  const [cardStates, setCardStates] = useState<Record<string, CardState>>({});
  const [showCopyPopup, setShowCopyPopup] = useState(false);
  const [isMemeModalOpen, setIsMemeModalOpen] = useState(false);

  const memePlaceholders = [
    meme4,
    meme1,
    meme2,
    meme3,
    meme5,
    meme6,
    meme7,
    meme8,
    meme9,
    meme10,
    meme11,
    meme12,
    meme13
  ];

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('s1gomes@torontomu.ca');
    setShowCopyPopup(true);
    setTimeout(() => setShowCopyPopup(false), 2000);
  };

  const handleClose = (id: string) => setCardStates(prev => ({ ...prev, [id]: 'closed' }));
  const handleMinimize = (id: string) => setCardStates(prev => ({ ...prev, [id]: 'minimized' }));
  const handleExpand = (id: string) => setCardStates(prev => ({ ...prev, [id]: 'expanded' }));
  const handleRestore = (id: string) => setCardStates(prev => ({ ...prev, [id]: 'default' }));

  const restoreAll = () => setCardStates({});

  const hasClosedCards = Object.values(cardStates).includes('closed');

  const renderCards = (items: typeof experiences, isProject = false) => {
    return items.map(item => (
      <InteractiveCard
        key={item.id}
        {...item}
        cardState={cardStates[item.id] || 'default'}
        onClose={handleClose}
        onMinimize={handleMinimize}
        onExpand={handleExpand}
        isProject={isProject}
      />
    ));
  };

  const renderClosedFiles = (items: typeof experiences) => {
    return items
      .filter(item => cardStates[item.id] === 'closed')
      .map(item => (
        <ClosedFile
          key={`file-${item.id}`}
          id={item.id}
          filename={item.filename}
          onRestore={handleRestore}
        />
      ));
  };

  return (
    <>
      <div className="stars"></div>

      <header>
        <nav className="glass floating-nav">
          <a href="#projects" aria-label="Projects">
            <span className="nav-text">Projects</span>
            <FaFolderOpen className="nav-icon" />
          </a>
          <span className="nav-divider">|</span>
          <a href="#experience" aria-label="Experience">
            <span className="nav-text">Experience</span>
            <FaBriefcase className="nav-icon" />
          </a>
          <span className="nav-divider">|</span>
          <a href="#extracurriculars" aria-label="Extracurriculars">
            <span className="nav-text">Extracurriculars</span>
            <FaStar className="nav-icon" />
          </a>
          <span className="nav-divider">|</span>
          <a href="#contact" aria-label="Contact">
            <span className="nav-text">Contact</span>
            <FaEnvelope className="nav-icon" />
          </a>
        </nav>
      </header>

      <div id="about" className="hero">
        <div className="typing-container">
          <h1 className="typing-animation">Hi! I'm Sara.</h1>
        </div>
        <p>I am a Computer Science student at Toronto Metropolitan University, exploring the realms of ML, data analytics, software & data engineering.</p>
        <div className="hero-footer">
          <span className="tag glow-on-load">Check out my work below!</span>
          <div className="marquee-container">
            <div className="marquee-content">
              <div className="marquee-track">
                {skillIcons.map((skill, index) => (
                  <span key={`skill-${index}`} className="skill-icon-item">
                    {skill.icon}
                    <span className="skill-name">{skill.name}</span>
                  </span>
                ))}
              </div>
              <div className="marquee-track">
                {skillIcons.map((skill, index) => (
                  <span key={`skill-dup-${index}`} className="skill-icon-item">
                    {skill.icon}
                    <span className="skill-name">{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="projects" className="content-section">
        <h2 className="section-title">Projects</h2>
        {renderCards(projects, false)}
        <div className="closed-files-container" id="closed-projects">
          {renderClosedFiles(projects)}
        </div>
      </section>

      <section id="experience" className="content-section">
        <h2 className="section-title">Work Experience</h2>
        {renderCards(experiences)}
        <div className="closed-files-container" id="closed-experience">
          {renderClosedFiles(experiences)}
        </div>
      </section>

      <section id="extracurriculars" className="content-section">
        <h2 className="section-title">Leadership & Involvement</h2>
        {renderCards(activities)}
        <div className="closed-files-container" id="closed-extracurriculars">
          {renderClosedFiles(activities)}
        </div>
      </section>

      {hasClosedCards && (
        <div id="reset-container" style={{ textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 2 }}>
          <button
            id="reset-cards"
            className="glass"
            style={{ padding: '10px 20px', color: '#fff', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.2)', fontFamily: "'Courier New', monospace", fontSize: '1rem' }}
            onClick={restoreAll}
          >
            Restore All Closed Cards
          </button>
        </div>
      )}



      <MemeModal
        isOpen={isMemeModalOpen}
        onClose={() => setIsMemeModalOpen(false)}
        memes={memePlaceholders}
      />

      <footer id="contact">
        - - - * - - -<br />
        <div className="footer-links">
          <a href="#" onClick={handleCopyEmail} style={{ position: 'relative' }}>
            <svg viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Email
            {showCopyPopup && <span className="copy-popup">Copied!</span>}
          </a>
          <a href="https://www.linkedin.com/in/s1gomes/" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
          <a href="https://github.com/smmgomes" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
        <br />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          Made on Earth...for now.
          <div
            className="easter-egg-file"
            onClick={() => setIsMemeModalOpen(true)}
            style={{ display: 'inline-flex', fontSize: '1rem' }}
          >
            <span className="easter-egg-icon" style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center' }}><img src={folderSvg} alt="Folder" style={{ width: '1em', height: '1em' }} /></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
