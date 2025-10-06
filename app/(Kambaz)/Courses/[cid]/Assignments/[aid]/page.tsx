"use client";
import { Form, Button, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div className="m-3" style={{ maxWidth: "800px" }}>
      <h5 className="mb-4">Assignment Name</h5>
      <Form>
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Control
            type="text"
            defaultValue="A1 - ENV + HTML"
            placeholder="Assignment Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="wd-description">
          <div
            style={{
              whiteSpace: "pre-wrap",
              border: "1px solid #ced4da",
              borderRadius: "0.375",
              padding: "0.5rem",
            }}
          >
            The assignment is{" "}
            <span style={{ color: "red" }}>available online</span>
            {"\n\n"}Submit a link to the landing page of your Web application
            running on Netlify.
            {"\n\n"}The landing page should include the following:
            {"\n"}- Your full name and section
            {"\n"}- Links to each of the lab assignments
            {"\n"}- Link to the Kanbas application
            {"\n"}- Links to all relevant source code repositories
            {"\n\n"}The Kanbas application should include a link to navigate
            back to the landing page.
          </div>
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex justify-content-end"
          controlId="wd-points"
        >
          <Form.Label className="ms-3">Points</Form.Label>
          <Form.Control
            type="number"
            defaultValue={100}
            style={{ width: "500px" }}
            placeholder="Points"
            className="ms-3"
          />
        </Form.Group>

        {/* Assignment Group & Display Grade */}
        <Form.Group className="mb-3 d-flex justify-content-end">
          <Form.Label className="ms-3">Assignment Group</Form.Label>
          <Form.Select
            id="wd-group"
            defaultValue="ASSIGNMENTS"
            style={{ width: "500px" }}
            className="ms-3"
          >
            <option value="ASSIGNMENTS">Assignments</option>
            <option value="QUIZZES">Quizzes</option>
            <option value="PROJECTS">Projects</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 d-flex justify-content-end">
          <Form.Label className="ms-3">Display Grade as</Form.Label>
          <Form.Select
            id="wd-display-grade-as"
            defaultValue="PERCENTAGE"
            style={{ width: "500px" }}
            className="ms-3"
          >
            <option value="PERCENTAGE">Percentage</option>
            <option value="SCORE">Score</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3 d-flex justify-content-end">
          <Form.Label className="me-3">Submission Type</Form.Label>
          <div
            className="mb-3"
            style={{
              whiteSpace: "pre-wrap",
              border: "1px solid #ced4da",
              borderRadius: "0.375",
              padding: "0.5rem",
              maxWidth: "500px",
            }}
          >
            {/* Submission Type */}
            <Form.Group
              className="mb-3 d-flex justify-content-end"
              controlId="wd-submission-type"
            >
              <Form.Select
                defaultValue="Online"
                style={{ width: "500px" }}
                className="ms-3"
              >
                <option value="Online">Online</option>
                <option value="Physical">Physical</option>
              </Form.Select>
            </Form.Group>

            {/* Online Entry Options */}
            <Form.Group className="mb-3 justify-content-end">
              <Form.Label>Online Entry Options</Form.Label>
              <Form.Check
                type="checkbox"
                id="wd-text-entry"
                label="Text Entry"
              />
              <Form.Check
                type="checkbox"
                id="wd-website-url"
                label="Website URL"
              />
              <Form.Check
                type="checkbox"
                id="wd-media-recordings"
                label="Media Recordings"
              />
              <Form.Check
                type="checkbox"
                id="wd-student-annotation"
                label="Student Annotation"
              />
              <Form.Check
                type="checkbox"
                id="wd-file-upload"
                label="File Uploads"
              />
            </Form.Group>
          </div>
        </Form.Group>

        <Form.Group className="mb-3 d-flex justify-content-end">
          <Form.Label className="me-3">Assign</Form.Label>
          <div
            className="mb-3"
            style={{
              whiteSpace: "pre-wrap",
              border: "1px solid #ced4da",
              borderRadius: "0.375",
              padding: "0.5rem",
              minWidth: "500px",
            }}
          >
            {/* Assign To */}
            <Form.Group className="mb-3" controlId="wd-assign-to">
              <Form.Label className="ms-3">Assign to</Form.Label>
              <Form.Control
                type="text"
                defaultValue="Everyone"
                placeholder="Assign To"
              />
            </Form.Group>

            <Form.Label className="ms-3">Due</Form.Label>
            <Form.Control
              type="date"
              id="wd-due-date"
              defaultValue="2024-05-13"
              placeholder="Due Date"
            />

            {/* Due and Availability Dates */}
            <Row className="mb-3">
              <Col>
                <Form.Label className="ms-3">Available from</Form.Label>
                <Form.Control
                  type="date"
                  id="wd-available-from"
                  defaultValue="2024-05-06"
                  placeholder="Available From"
                />
              </Col>
              <Col>
                <Form.Label>Until</Form.Label>
                <Form.Control
                  type="date"
                  id="wd-available-until"
                  defaultValue="2024-05-20"
                  placeholder="Available Until"
                />
              </Col>
            </Row>
          </div>

          {/* Action Buttons */}
        </Form.Group>
        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary" id="wd-cancel">
            Cancel
          </Button>
          <Button variant="danger" id="wd-save">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

/*export default function AssignmentEditor() {
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
*/
