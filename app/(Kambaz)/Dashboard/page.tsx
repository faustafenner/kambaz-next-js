/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import {
  addEnrollment,
  removeEnrollmentByUserCourse,
} from "../Courses/enrollments/reducer";
import Link from "next/link";
import { useState } from "react";
import { RootState } from "../store";

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  FormControl,
  Row,
} from "react-bootstrap";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const { enrollments } = useSelector(
    (state: RootState) => state.enrollmentsReducer as any
  );
  const dispatch = useDispatch();
  const [showAll, setShowAll] = useState(false); // false -> show enrolled only

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  return (
    <div id="wd-dashboard">
      <div className="d-flex align-items-center justify-content-between">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <div>
          <button
            id="wd-enrollments-toggle"
            className="btn btn-primary"
            onClick={() => setShowAll((s) => !s)}
            title="Toggle between all courses and enrolled courses"
          >
            Enrollments
          </button>
        </div>
      </div>
      <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={() => dispatch(addNewCourse(course))}
        >
          {" "}
          Add{" "}
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={() => dispatch(updateCourse(course))}
          id="wd-update-course-click"
        >
          Update{" "}
        </button>
      </h5>
      <br />
      <FormControl
        value={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        as="textarea"
        value={course.description}
        rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses
            .filter((course) => {
              if (showAll) return true;
              if (!currentUser) return false;
              return enrollments.some(
                (enrollment: any) =>
                  enrollment.user === (currentUser as any)._id &&
                  enrollment.course === course._id
              );
            })
            .map((course) => {
              const isEnrolled = currentUser
                ? enrollments.some(
                    (enrollment: any) =>
                      enrollment.user === (currentUser as any)._id &&
                      enrollment.course === course._id
                  )
                : false;

              return (
                <Col
                  key={course._id}
                  className="wd-dashboard-course"
                  style={{ width: "300px" }}
                >
                  <Card>
                    <Link
                      href={`/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <CardImg
                        src="/images/react.png"
                        variant="top"
                        width="100%"
                        height={160}
                      />
                      <CardBody className="card-body">
                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                          {course.name}{" "}
                        </CardTitle>
                        <CardText
                          className="wd-dashboard-course-description overflow-hidden"
                          style={{ height: "100px" }}
                        >
                          {course.description}{" "}
                        </CardText>
                        <Button variant="primary"> Go </Button>
                        {/* action buttons - stop propagation so Link doesn't navigate */}
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            dispatch(deleteCourse(course._id));
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            event.stopPropagation();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>

                        {/* Enroll / Unenroll */}
                        {currentUser ? (
                          isEnrolled ? (
                            <button
                              className="btn btn-outline-danger mt-2"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                dispatch(
                                  removeEnrollmentByUserCourse({
                                    user: (currentUser as any)._id,
                                    course: course._id,
                                  })
                                );
                              }}
                            >
                              Unenroll
                            </button>
                          ) : (
                            <button
                              className="btn btn-success mt-2"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                dispatch(
                                  addEnrollment({
                                    user: (currentUser as any)._id,
                                    course: course._id,
                                  })
                                );
                              }}
                            >
                              Enroll
                            </button>
                          )
                        ) : (
                          <Link
                            href="/Account/Signin"
                            className="btn btn-outline-primary mt-2"
                          >
                            Sign in to enroll
                          </Link>
                        )}
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
}
