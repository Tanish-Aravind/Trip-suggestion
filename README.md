# IndianExplorer Project Readme

IndianExplorer is a multi-page web application designed to provide users with curated travel recommendations across various Indian states. The application features a streamlined interface that allows for efficient navigation and state-specific content filtering.

## Key Features
- State-Specific Navigation: A centralized selection system on the home page for user input.
- Automated Filtering: A JavaScript-based logic that identifies URL parameters to display relevant tourist attractions while hiding non-matching content.
- Responsive Layout: A CSS-engineered split-screen and grid design compatible with multiple device display sizes.
- Standardized Content: A consistent delivery of 5 major attractions per state, including high-resolution imagery and descriptive summaries.

## Tools and Technologies
- VS Code: Integrated development environment (IDE) utilized for all coding and debugging.
- HTML5: Used for the structural foundation of the home and destination pages.
- CSS3: Implementation of custom variables, Flexbox for the landing page, and CSS Grid for the results gallery.
- Vanilla JavaScript: Managed event handling, page redirection, and DOM manipulation for content filtering.
- Windows: The primary operating system for development and file management.

## File Directory
/trip-suggestion
|-- index.html           # Home page with state selection
|-- destination.html     # Results page for tourist attractions
|-- /resources
    |-- /css
        |-- style.css    # Global stylesheet and responsive design
    |-- /img
        |-- bg-img.png   # High-resolution assets
    |-- /js
        |-- script.js    # Application logic for navigation and filtering

## How to Run
1. Clone or download the project folder to your local machine.
2. Ensure the file structure remains intact as per the directory listed above.
3. Open index.html in any modern web browser.
4. Select a state from the dropdown menu and click "Explore Destinations."
