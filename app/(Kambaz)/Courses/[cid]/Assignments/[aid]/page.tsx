"use client";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useParams } from "next/navigation";
import { assignments as dbAssignments } from "../../../../Database";
import Link from "next/link";

export default function AssignmentEditor() {
  const { cid, aid } = useParams() as { cid: string; aid: string };
  const assignment = dbAssignments.find((a) => a._id === aid);

  if (!assignment) {
    return <div className="m-3 text-danger">Assignment not found.</div>;
  }

  return (
    <div className="m-3" style={{ maxWidth: "800px" }}>
      <h5 className="mb-4">{assignment.title}</h5>

      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Control
            type="text"
            defaultValue={assignment.title}
            placeholder="Assignment Name"
          />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-3" controlId="wd-description">
          <div
            style={{
              whiteSpace: "pre-wrap",
              border: "1px solid #ced4da",
              borderRadius: "0.375rem",
              padding: "0.5rem",
            }}
          >
            {assignment.description}
          </div>
        </Form.Group>

        {/* Points */}
        <Form.Group
          className="mb-3 d-flex justify-content-end"
          controlId="wd-points"
        >
          <Form.Label className="ms-3">Points</Form.Label>
          <Form.Control
            type="number"
            defaultValue={assignment.points}
            style={{ width: "500px" }}
            placeholder="Points"
            className="ms-3"
          />
        </Form.Group>

        {/* Assignment Group & Grade Display */}
        <Form.Group className="mb-3 d-flex justify-content-end">
          <Form.Label className="ms-3">Assignment Group</Form.Label>
          <Form.Select
            id="wd-group"
            defaultValue={assignment.category.toUpperCase()}
            style={{ width: "500px" }}
            className="ms-3"
          >
            <option value="ASSIGNMENT">Assignments</option>
            <option value="QUIZ">Quizzes</option>
            <option value="PROJECT">Projects</option>
            <option value="EXAM">Exams</option>
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

        {/* Submission Type and Online Entry Options */}
        <Form.Group className="mb-3 d-flex justify-content-end">
          <Form.Label className="me-3">Submission Type</Form.Label>
          <div
            className="mb-3"
            style={{
              whiteSpace: "pre-wrap",
              border: "1px solid #ced4da",
              borderRadius: "0.375rem",
              padding: "0.5rem",
              maxWidth: "500px",
            }}
          >
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

        {/* Assign To, Dates */}
        <Form.Group className="mb-3 d-flex justify-content-end">
          <Form.Label className="me-3">Assign</Form.Label>
          <div
            className="mb-3"
            style={{
              whiteSpace: "pre-wrap",
              border: "1px solid #ced4da",
              borderRadius: "0.375rem",
              padding: "0.5rem",
              minWidth: "500px",
            }}
          >
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
              defaultValue={assignment.dueDate}
              placeholder="Due Date"
            />

            <Row className="mb-3">
              <Col>
                <Form.Label className="ms-3">Available from</Form.Label>
                <Form.Control
                  type="date"
                  id="wd-available-from"
                  defaultValue={assignment.availableFrom}
                  placeholder="Available From"
                />
              </Col>
              <Col>
                <Form.Label>Until</Form.Label>
                <Form.Control
                  type="date"
                  id="wd-available-until"
                  defaultValue=""
                  placeholder="Available Until"
                />
              </Col>
            </Row>
          </div>
        </Form.Group>

        <div className="d-flex justify-content-end gap-2">
          <Link
            href={`/Courses/${encodeURIComponent(cid)}/Assignments`}
            className="btn btn-secondary"
            id="wd-cancel"
          >
            Cancel
          </Link>
          <Link
            href={`/Courses/${encodeURIComponent(cid)}/Assignments`}
            className="btn btn-danger"
            id="wd-save"
          >
            Save
          </Link>
        </div>
      </Form>
    </div>
  );
}
