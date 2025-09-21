export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" cols={50} rows={10}
        defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page."
      >
        </textarea>
      <br />
      <table>
        <br/>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>
        <br/>
        <tr>
            <td>
                <label  htmlFor="wd-group"> Assignment Group </label><br/>
            </td>
            <td>
                <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="PROJECTS">PROJECTS</option>
                </select>
            </td>
        </tr>
        <br/>
        <tr>
            <td>
                <label  htmlFor="wd-display-grade-as"> Display Grade as </label><br/>
            </td>
            <td>
                <select id="wd-display-grade-as">
                <option value="PERCENTAGE">Percentage</option>
                <option value="SCORE">Score</option>
                </select>
            </td>
        </tr>
        <br/>
        <tr>
            <td>
                <label  htmlFor="wd-submission-type"> Subission Type </label><br/>
            </td>
            <td>
                <select id="wd-submission-type">
                <option value="Online">Online</option>
                <option value="Physical">Physical</option>
                </select>
            </td>
            <br/>
        </tr>
        <br/>
          <tr>
            <td>
            </td>
            <td>
            <label>Online Entry Options</label><br/>

            <input type="checkbox" name="check-entry" id="wd-text-entry"/>
            <label htmlFor="wd-chkbox-text">Text Entry</label><br/>

            <input type="checkbox" name="check-entry" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>

            <input type="checkbox" name="check-entry" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

            <input type="checkbox" name="check-entry" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

            <input type="checkbox" name="check-entry" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
        </tr>
        <br/>
        <tr>
            <td>
                Assign
            </td>
            <td>
                <label htmlFor="wd-assign-to">Assign to</label><br/>
                <input type="text"
                defaultValue="Everyone"
                id="wd-assign-to" />
            </td>
        </tr>
        <br/>
        <tr>
            <td>
            </td>
            <td>
                <label htmlFor="wd-due-date">Due</label><br/>
                 <input defaultValue="2024-05-13" type="date" id="wd-due-date" />
            </td>
        </tr>
        <tr>
            <td>
            </td>
            <td>
                <label htmlFor="wd-available-from">Available from</label><br/>
                 <input defaultValue="2024-05-06" type="date" id="wd-available-from" />
            </td>
            <td>
                <label htmlFor="wd-available-until">Until</label><br/>
                 <input defaultValue="2024-05-20" type="date" id="wd-available-until"/>
                 
            </td>
        </tr>
        <br/>
        <br/>

        <tr>
            <td></td>
            <td></td>
            <td>
                 <button type="button" id="wd-cancel">  Cancel  </button>
                  <button type="button" id="wd-save">  Save  </button>
            </td>
        </tr>

      </table>

      <br/>
      <br/>
    </div>
);}
