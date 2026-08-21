document.addEventListener('DOMContentLoaded', () => {
  // Select all interactive cards
  const interactiveCards = document.querySelectorAll('.interactive-card');
  const resetContainer = document.getElementById('reset-container');
  const resetBtn = document.getElementById('reset-cards');

  // Handle Mac Buttons Interactions
  interactiveCards.forEach(card => {
    const closeBtn = card.querySelector('.btn-close');
    const minimizeBtn = card.querySelector('.btn-minimize');
    const expandBtn = card.querySelector('.btn-expand');

    // Close button (Red)
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      card.style.display = 'none';
      
      // Determine which section's container to put the file in
      const sectionId = card.closest('section').id;
      const closedContainer = document.getElementById(`closed-${sectionId}`);
      
      // Create file icon element
      const fileId = `file-${card.id}`;
      if (!document.getElementById(fileId)) {
        const fileElement = document.createElement('div');
        fileElement.className = 'closed-file';
        fileElement.id = fileId;
        const filename = card.getAttribute('data-filename') || 'Card.md';
        fileElement.innerHTML = `📄 ${filename}`;
        
        fileElement.addEventListener('click', () => {
          card.style.display = 'block';
          fileElement.remove();
          checkClosedCards();
        });
        
        closedContainer.appendChild(fileElement);
      }
      
      checkClosedCards();
    });

    // Minimize button (Yellow)
    minimizeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      // Explicit state setting
      card.classList.remove('expanded');
      card.classList.add('minimized');
    });

    // Expand button (Green)
    expandBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      // Explicit state setting
      card.classList.remove('minimized');
      card.classList.add('expanded');
    });
  });

  // Check if any cards are closed to show the global reset button
  function checkClosedCards() {
    const closedCards = Array.from(interactiveCards).filter(c => c.style.display === 'none');
    if (closedCards.length > 0) {
      resetContainer.style.display = 'block';
    } else {
      resetContainer.style.display = 'none';
    }
  }

  // Global Reset button logic
  resetBtn.addEventListener('click', () => {
    interactiveCards.forEach(card => {
      card.style.display = 'block';
    });
    // Remove all file elements
    document.querySelectorAll('.closed-file').forEach(file => file.remove());
    resetContainer.style.display = 'none';
  });
});
