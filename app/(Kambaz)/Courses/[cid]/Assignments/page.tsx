"use client";
import {
  Button,
  FormControl,
  InputGroup,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { BsGripVertical, BsSearch } from "react-icons/bs";
import { TfiWrite } from "react-icons/tfi";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControl from "./AssignmentsControl";

import Link from "next/link";
import { FaPlus } from "react-icons/fa6";

export default function Assignments() {
  return (
    <div>
      <AssignmentsControl />
      <br />

      <ListGroup className="rounded-0" id="wd-assignments-list">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS 40% of Total
            <LessonControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-3 d-flex align-items-start">
              <div className="me-3">
                <BsGripVertical className="me-2 fs-3" />
                <TfiWrite className="fs-4 text-success" />
              </div>

              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div className="d-flex align-items-center">
                    <Link
                      href="/Courses/1234/Assignments/123"
                      className="wd-assignment-link"
                    >
                      A1 - ENV + HTML
                    </Link>
                  </div>

                  <LessonControlButtons />
                </div>

                <div className="ps-0">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 6 at 12:00 am |
                  <br />
                  <b>Due</b> May 13 at 11:59pm | 100 pts
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-3 d-flex align-items-start">
              <div className="me-3">
                <BsGripVertical className="me-2 fs-3" />
                <TfiWrite className="fs-4 text-success" />
              </div>

              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div className="d-flex align-items-center">
                    <Link
                      href="/Courses/1234/Assignments/123"
                      className="wd-assignment-link"
                    >
                      A2 - CSS + BOOTSTRAP
                    </Link>
                  </div>

                  <LessonControlButtons />
                </div>

                <div className="ps-0">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 13 at 12:00 am |
                  <br />
                  <b>Due</b> May 20 at 11:59pm | 100 pts
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-3 d-flex align-items-start">
              <div className="me-3">
                <BsGripVertical className="me-2 fs-3" />
                <TfiWrite className="fs-4 text-success" />
              </div>

              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div className="d-flex align-items-center">
                    <Link
                      href="/Courses/1234/Assignments/123"
                      className="wd-assignment-link"
                    >
                      A3 - JAVASCRIPT + REACT
                    </Link>
                  </div>

                  <LessonControlButtons />
                </div>

                <div className="ps-0">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 20 at 12:00 am |
                  <br />
                  <b>Due</b> May 27 at 11:59pm | 100 pts
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            QUIZZES 20% of Total
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-3 d-flex align-items-start">
              <div className="me-3">
                <BsGripVertical className="me-2 fs-3" />
                <TfiWrite className="fs-4 text-success" />
              </div>

              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div className="d-flex align-items-center">
                    <Link
                      href="/Courses/1234/Assignments/123"
                      className="wd-assignment-link"
                    >
                      Quiz 1 - ENV + HTML
                    </Link>
                  </div>

                  <LessonControlButtons />
                </div>

                <div className="ps-0">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 6 at 12:00 am |
                  <br />
                  <b>Due</b> May 13 at 11:59pm | 100 pts
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            EXAMS 20% of Total
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-3 d-flex align-items-start">
              <div className="me-3">
                <BsGripVertical className="me-2 fs-3" />
                <TfiWrite className="fs-4 text-success" />
              </div>

              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div className="d-flex align-items-center">
                    <Link
                      href="/Courses/1234/Assignments/123"
                      className="wd-assignment-link"
                    >
                      Exam 1 - ENV + HTML
                    </Link>
                  </div>

                  <LessonControlButtons />
                </div>

                <div className="ps-0">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 6 at 12:00 am |
                  <br />
                  <b>Due</b> May 13 at 11:59pm | 100 pts
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            PROJECTS 20% of Total
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-3 d-flex align-items-start">
              <div className="me-3">
                <BsGripVertical className="me-2 fs-3" />
                <TfiWrite className="fs-4 text-success" />
              </div>

              <div className="flex-grow-1">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div className="d-flex align-items-center">
                    <Link
                      href="/Courses/1234/Assignments/123"
                      className="wd-assignment-link"
                    >
                      Project 1 - ENV + HTML
                    </Link>
                  </div>

                  <LessonControlButtons />
                </div>

                <div className="ps-0">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 6 at 12:00 am |
                  <br />
                  <b>Due</b> May 13 at 11:59pm | 100 pts
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

/*import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">

        ASSIGNMENTS 40% of Total <button>+</button> </h3>

      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" >A1 - ENV + HTML</Link>
          <br/>
          Multiple Modules | <b> Not available until </b> May 6 at 12:00 am |
          <br/>
          <b>Due </b>May 13 at 11:59pm | 100 pts
        </li>
         <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" >A2 - CSS + BOOTSTRAP</Link>
          <br/>
          Multiple Modules | <b> Not available until </b> May 13 at 12:00 am |
          <br/>
          <b>Due </b>May 20 at 11:59pm | 100 pts
        </li>
         <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" >A3 - JAVASCRIPT + REACT</Link>
          <br/>
          Multiple Modules | <b> Not available until </b> May 20 at 12:00 am |
          <br/>
          <b>Due </b>May 27 at 11:59pm | 100 pts
        </li>
      </ul>

      <h3 id="wd-quizzes-title">QUIZZES 20% of Total <button>+</button> </h3>

      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" >A1 - ENV + HTML</Link>
          <br/>
          Multiple Modules | <b> Not available until </b> May 6 at 12:00 am |
          <br/>
          <b>Due </b>May 13 at 11:59pm | 100 pts
        </li>
         <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" >A2 - CSS + BOOTSTRAP</Link>
          <br/>
          Multiple Modules | <b> Not available until </b> May 13 at 12:00 am |
          <br/>
          <b>Due </b>May 20 at 11:59pm | 100 pts
        </li>
         <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" >A3 - JAVASCRIPT + REACT</Link>
          <br/>
          Multiple Modules | <b> Not available until </b> May 20 at 12:00 am |
          <br/>
          <b>Due </b>May 27 at 11:59pm | 100 pts
        </li>
      </ul>

            <h3 id="wd-exams-title">EXAMS 20% of Total <button>+</button> </h3>

      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" >A1 - ENV + HTML</Link>
          <br/>
          Multiple Modules | <b> Not available until </b> May 6 at 12:00 am |
          <br/>
          <b>Due </b>May 13 at 11:59pm | 100 pts
        </li>
         <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" >A2 - CSS + BOOTSTRAP</Link>
          <br/>
          Multiple Modules | <b> Not available until </b> May 13 at 12:00 am |
          <br/>
          <b>Due </b>May 20 at 11:59pm | 100 pts
        </li>
         <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" >A3 - JAVASCRIPT + REACT</Link>
          <br/>
          Multiple Modules | <b> Not available until </b> May 20 at 12:00 am |
          <br/>
          <b>Due </b>May 27 at 11:59pm | 100 pts
        </li>
      </ul>

            <h3 id="wd-project-title">PROJECT 20% of Total <button>+</button> </h3>

      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" >A1 - ENV + HTML</Link>
          <br/>
          Multiple Modules | <b> Not available until </b> May 6 at 12:00 am |
          <br/>
          <b>Due </b>May 13 at 11:59pm | 100 pts
        </li>
         <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" >A2 - CSS + BOOTSTRAP</Link>
          <br/>
          Multiple Modules | <b> Not available until </b> May 13 at 12:00 am |
          <br/>
          <b>Due </b>May 20 at 11:59pm | 100 pts
        </li>
         <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link" >A3 - JAVASCRIPT + REACT</Link>
          <br/>
          Multiple Modules | <b> Not available until </b> May 20 at 12:00 am |
          <br/>
          <b>Due </b>May 27 at 11:59pm | 100 pts
        </li>
      </ul>
    </div>
);}
*/
