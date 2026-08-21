# Update Portfolio Interactions & Content Plan

This document outlines the plan to refine the interaction logic of your portfolio's project and experience cards, update the content, and implement the new "file representation" feature for closed cards.

## Goal Description

We will:
1. Remove the colored status dots next to the card titles.
2. Remove the "About" link from the navigation bar.
3. Add the "Student Support Specialist" role back to the Work Experience section.
4. Refine the Mac window button logic so the Green and Yellow buttons set explicit states instead of toggling when double-clicked.
5. Change the Red "Close" button behavior so it collapses the card into a clickable "file" inside that specific section, rather than just disappearing.

## Proposed Changes

### [MODIFY] index.html
- **Nav**: Remove the `<a href="#about">About</a>` link.
- **Titles**: Remove all `<span class="status sX"></span>` elements from the `<h3>` tags in experience, extracurriculars, and projects.
- **New Content**: Add the "Student Support Specialist" card under the "Work Experience" section, complete with its skills/tools and description.
- **Section Structure**: Add a designated "closed files container" (e.g., `<div class="closed-files-container"></div>`) within each of the three sections (Experience, Activities, Projects). This container will host the file icons when cards in that section are closed.

### [MODIFY] style.css
- **File Icons**: Create a new `.closed-file` CSS class. This will style the closed cards to look like actual system files (e.g., monospace font, perhaps a small file icon `📄`, hover effects to indicate it's clickable). 
- Ensure these files display nicely within their section's layout.

### [MODIFY] script.js
- **Green/Yellow Button Logic**: 
  - Clicking Yellow will explicitly add the `.minimized` class and remove `.expanded`. Clicking it again will do nothing.
  - Clicking Green will explicitly add the `.expanded` class and remove `.minimized`. Clicking it again will do nothing.
- **Red Button Logic**:
  - When the Red button is clicked, it will hide the card.
  - It will then generate a file-like element (e.g., `Media_and_Graphics_Assistant.md`) in that section's "closed files container".
  - Clicking this new file element will remove the file from the container and unhide the original card.
  - The global "Restore Closed Cards" button will also be updated to restore the cards and clear all file representations.

## Verification Plan
1. Visually confirm the nav bar and title dots are updated.
2. Click the Green and Yellow buttons multiple times to ensure they don't toggle back and forth but stay in their respective states.
3. Click the Red button on a card and verify it turns into a file (e.g., `Automation_Developer.md`) in its section.
4. Click the newly created file to verify it restores the card correctly.
