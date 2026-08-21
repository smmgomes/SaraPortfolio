import React from 'react';

interface ClosedFileProps {
  id: string;
  filename: string;
  onRestore: (id: string) => void;
}

export const ClosedFile: React.FC<ClosedFileProps> = ({ id, filename, onRestore }) => {
  return (
    <div className="closed-file" id={`file-${id}`} onClick={() => onRestore(id)}>
      📄 {filename}
    </div>
  );
};
