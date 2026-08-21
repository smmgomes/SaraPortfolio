import React from 'react';

interface InteractiveCardProps {
  id: string;
  filename: string;
  title: string;
  company?: string;
  skills?: React.ReactNode;
  shortDesc?: React.ReactNode;
  fullDesc: React.ReactNode;
  cardState: 'default' | 'expanded' | 'minimized' | 'closed';
  onClose: (id: string) => void;
  onMinimize: (id: string) => void;
  onExpand: (id: string) => void;
  isProject?: boolean;
  link?: string;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  id,
  filename,
  title,
  company,
  skills,
  shortDesc,
  fullDesc,
  cardState,
  onClose,
  onMinimize,
  onExpand,
  isProject,
  link
}) => {
  if (cardState === 'closed') {
    return null;
  }

  const baseClass = isProject ? 'glass card interactive-card' : 'glass experience-card interactive-card';
  let classes = baseClass;
  if (cardState === 'expanded') classes += ' expanded';
  if (cardState === 'minimized') classes += ' minimized';

  return (
    <div className={classes} id={id}>
      <div className="linux-header">
        <span className="linux-title">sara@portfolio:~/{filename}</span>
        <div className="linux-controls">
          <span className="btn-minimize" onClick={() => onMinimize(id)}>_</span>
          <span className="btn-expand" onClick={() => onExpand(id)}>□</span>
          <span className="btn-close" onClick={() => onClose(id)}>✕</span>
        </div>
      </div>
      <div className="card-content" style={{ position: 'relative' }}>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', right: 0, top: '2px', color: '#eae6ff' }} title="View Project" className="project-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        )}
        <h3 style={{ paddingRight: link ? '30px' : 0 }}>{title}</h3>
        {(company || skills) && (
          <p className="company short-desc">
            {company && <>{company}</>}
            {company && skills && <br />}
            {skills && (
              <span className="tech-stack" style={{ marginTop: company ? '5px' : '0', display: 'inline-block' }}>
                <strong>Skills/Tools:</strong> {skills}
              </span>
            )}
          </p>
        )}
        {shortDesc && <p className="short-desc">{shortDesc}</p>}
        <div className="full-desc">
          {fullDesc}
        </div>
      </div>
    </div>
  );
};
