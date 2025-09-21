export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      
        <button type="button" id="wd-all-good">  Collapse All  </button>
        <button type="button" id="wd-all-good">  View Progress  </button>
        <select id="wd-select-publish-option">
        <option value="PUBLISH ALL">Publish All</option>
        <option value="PUBLISH ONE">Publish One</option> </select>
        <button type="button" id="wd-all-good">+Module </button>

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introfuction</li>
                <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User Interfaces</li>
              </ul>
            </li>
             <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Web Development</li>
                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                <li className="wd-content-item">Deploy the assignment to Netlify</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Developing Full Stack Apps - Chapter 1 - Building React User Interfaces</li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Implementing the Kambaz Account Screens</li>
                <li className="wd-content-item">Implementing the Kambaz Dashboard Screen</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 1, Lecture 3 - Styling Web Pages with CSS and Bootstrap, Assignment 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to CSS</li>
                <li className="wd-content-item">Selectors by tag ID, classes, and document structure</li>
              </ul>
            </li>
                   <li className="wd-lesson">
              <span className="wd-title">READING</span>
              <ul className="wd-content">
                <li className="wd-content-item">Developing Full Stack Apps - Chapter 2</li>
              </ul>
            </li>
             <li className="wd-lesson">
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Cascading Style Sheets</li>
                <li className="wd-content-item">Styling with Colors</li>
              </ul>
            </li>

          </ul>
        </li>
      </ul>
    </div>
);}
