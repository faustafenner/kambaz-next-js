"use client";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControl from "./AssignmentsControl";

import Link from "next/link";
import { useParams } from "next/navigation";
import { assignments as dbAssignments } from "../../../Database";

export default function Assignments() {
  const { cid } = useParams() as { cid: string };
  const assignments = dbAssignments.filter((a) => a.course === cid);

  const formatDate = (dateStr: string) => {
    const dt = new Date(dateStr);
    return dt.toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      <AssignmentsControl />
      <br />

      <ListGroup className="rounded-0" id="wd-assignments-list">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <LessonControlButtons />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            {assignments.map((assignment) => (
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

                    <LessonControlButtons />
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
