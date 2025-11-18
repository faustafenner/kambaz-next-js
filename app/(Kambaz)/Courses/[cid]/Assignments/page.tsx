/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaTrash } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControl from "./AssignmentsControl";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import {
  deleteAssignment as deleteAssignmentAction,
  updateAssignment,
} from "../../Assignments/reducer";
import * as assignmentsClient from "../../Assignments/client";
import { useEffect, useState } from "react";

export default function Assignments() {
  const params = useParams();
  const rawCid = (params as any).cid;
  const cid = Array.isArray(rawCid) ? rawCid[0] : rawCid;
  const dispatch = useDispatch();
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch assignments from server
  const fetchAssignments = async () => {
    try {
      const courseAssignments =
        await assignmentsClient.findAssignmentsForCourse(cid);
      setAssignments(courseAssignments);
    } catch (error) {
      console.error("Error fetching assignments:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "";
    const dt = new Date(dateStr);
    return dt.toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
    });
  };

  const onDelete = async (id: string) => {
    if (!confirm("Are you sure you want to remove the assignment?")) return;

    try {
      await assignmentsClient.deleteAssignment(id);
      dispatch(deleteAssignmentAction(id));
      // Refresh the assignments list
      fetchAssignments();
    } catch (error) {
      console.error("Error deleting assignment:", error);
      alert("Failed to delete assignment. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading assignments...</div>;
  }

  return (
    <div>
      <AssignmentsControl cid={cid} />
      <br />

      <ListGroup className="rounded-0" id="wd-assignments-list">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <LessonControlButtons />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            {assignments.map((assignment: any) => (
              <ListGroupItem
                key={assignment._id}
                className="wd-lesson p-3 ps-3 d-flex align-items-start"
              >
                <div className="me-3">
                  <BsGripVertical className="me-2 fs-3" />
                  <TfiWrite className="fs-4 text-success" />
                </div>

                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <div className="d-flex align-items-center">
                      <Link
                        href={`/Courses/${encodeURIComponent(
                          cid
                        )}/Assignments/${encodeURIComponent(assignment._id)}`}
                        className="wd-assignment-link"
                      >
                        {assignment.title}
                      </Link>
                    </div>

                    <div>
                      <LessonControlButtons />
                      <FaTrash
                        className="text-danger ms-2 mb-1"
                        onClick={() => onDelete(assignment._id)}
                        aria-label={`Delete ${assignment.title}`}
                        title="Delete assignment"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  <div className="ps-0">
                    {assignment.modules && (
                      <>
                        <span className="text-danger">Multiple Modules</span> |{" "}
                      </>
                    )}
                    <b>Not available until</b>{" "}
                    {formatDate(assignment.availableFrom)} at 11:59pm |
                    <br />
                    <b>Due</b> {formatDate(assignment.dueDate)} at 11:59pm |{" "}
                    {assignment.points} pts
                  </div>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
