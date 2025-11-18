/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import {
  updateAssignment as updateAssignmentAction,
  addAssignment,
} from "../../../Assignments/reducer";
import * as assignmentsClient from "../../../Assignments/client";
import { useState, useEffect } from "react";

export default function AssignmentEditor() {
  const params = useParams();
  const rawCid = (params as any).cid;
  const rawAid = (params as any).aid;
  const cid = Array.isArray(rawCid) ? rawCid[0] : rawCid;
  const aid = Array.isArray(rawAid) ? rawAid[0] : rawAid;
  const dispatch = useDispatch();
  const router = useRouter();

  const [assignment, setAssignment] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const isNew = aid === "new";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState<number>(100);
  const [dueDate, setDueDate] = useState<string>("");
  const [availableFrom, setAvailableFrom] = useState<string>("");

  // Fetch assignment if not new
  useEffect(() => {
    const fetchAssignment = async () => {
      if (isNew) {
        setLoading(false);
        return;
      }

      try {
        const assignments = await assignmentsClient.findAssignmentsForCourse(
          cid
        );
        const foundAssignment = assignments.find((a: any) => a._id === aid);

        if (foundAssignment) {
          setAssignment(foundAssignment);
          setTitle(foundAssignment.title || "");
          setDescription(foundAssignment.description || "");
          setPoints(foundAssignment.points || 100);
          setDueDate(foundAssignment.dueDate || "");
          setAvailableFrom(foundAssignment.availableFrom || "");
        }
      } catch (error) {
        console.error("Error fetching assignment:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAssignment();
  }, [cid, aid, isNew]);

  if (loading) {
    return <div className="m-3">Loading...</div>;
  }

  if (!assignment && !isNew) {
    return <div className="m-3 text-danger">Assignment not found.</div>;
  }

  const onSave = async () => {
    try {
      if (isNew) {
        const newAssignment = {
          title,
          description,
          points,
          dueDate,
          availableFrom,
          course: cid,
          modules: [],
          category: "Assignment",
        };

        const createdAssignment = await assignmentsClient.createAssignment(
          cid,
          newAssignment
        );
        dispatch(addAssignment(createdAssignment));
      } else {
        const updatedAssignment = {
          ...assignment,
          title,
          description,
          points,
          dueDate,
          availableFrom,
        };

        await assignmentsClient.updateAssignment(updatedAssignment);
        dispatch(updateAssignmentAction(updatedAssignment));
      }

      router.push(`/Courses/${encodeURIComponent(String(cid))}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
      alert("Failed to save assignment. Please try again.");
    }
  };

  return (
    <div className="m-3" style={{ maxWidth: "800px" }}>
      <h5 className="mb-4">
        {isNew ? "New Assignment" : assignment?.title || title}
      </h5>

      <Form>
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Assignment Name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="wd-description">
          <Form.Control
            as="textarea"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          className="mb-3 d-flex justify-content-end"
          controlId="wd-points"
        >
          <Form.Label className="ms-3">Points</Form.Label>
          <Form.Control
            type="number"
            value={points}
            style={{ width: "500px" }}
            placeholder="Points"
            className="ms-3"
            onChange={(e) => setPoints(Number(e.target.value))}
          />
        </Form.Group>

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
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              placeholder="Due Date"
            />

            <Row className="mb-3">
              <Col>
                <Form.Label className="ms-3">Available from</Form.Label>
                <Form.Control
                  type="date"
                  id="wd-available-from"
                  value={availableFrom}
                  onChange={(e) => setAvailableFrom(e.target.value)}
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
          <Button
            variant="secondary"
            onClick={() =>
              router.push(
                `/Courses/${encodeURIComponent(String(cid))}/Assignments`
              )
            }
            id="wd-cancel"
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={onSave} id="wd-save">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
