import { useState } from 'react';
import { InteractiveCard } from './components/InteractiveCard';
import { ClosedFile } from './components/ClosedFile';
import { experiences, activities, projects } from './data/portfolioData';

type CardState = 'default' | 'expanded' | 'minimized' | 'closed';

function App() {
  const [cardStates, setCardStates] = useState<Record<string, CardState>>({});
  const [showCopyPopup, setShowCopyPopup] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('sara.mary.m.gomes@gmail.com');
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
          <a href="#experience">Experience</a>
          <a href="#extracurriculars">Activities</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div id="about" className="hero">
        <div className="typing-container">
          <h1 className="typing-animation">Hi! I'm Sara.</h1>
        </div>
        <p>I am a Computer Science student at Toronto Metropolitan University, exploring the realms of software & data engineering.</p>
        <span className="tag glow-on-load">Check out my work below!</span>
      </div>

      <section id="experience" className="content-section">
        <h2 className="section-title">Work Experience</h2>
        {renderCards(experiences)}
        <div className="closed-files-container" id="closed-experience">
          {renderClosedFiles(experiences)}
        </div>
      </section>

      <section id="extracurriculars" className="content-section">
        <h2 className="section-title">Activities</h2>
        {renderCards(activities)}
        <div className="closed-files-container" id="closed-extracurriculars">
          {renderClosedFiles(activities)}
        </div>
      </section>

      <section id="projects" className="content-section">
        <h2 className="section-title">Projects</h2>
        {renderCards(projects, false)}
        <div className="closed-files-container" id="closed-projects">
          {renderClosedFiles(projects)}
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
        Made on Earth...for now.
      </footer>
    </>
  );
}

export default App;
