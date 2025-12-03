/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, updateCourse, setCourses } from "../Courses/reducer";

import {
  addEnrollment,
  removeEnrollmentByUserCourse,
} from "../Courses/enrollments/reducer";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { RootState } from "../store";
import * as client from "../Courses/client";
import * as enrollmentsClient from "../Courses/enrollments/client";

//add comment to push

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
    department: "D123",
    credits: 4,
    image: "/images/reactjs.jpg",
    description: "New Description",
  });
  const fetchCourses = useCallback(async () => {
    try {
      let fetchedCourses;
      if (showAll) {
        fetchedCourses = await client.fetchAllCourses();
      } else {
        fetchedCourses = await client.findMyCourses();
      }
      dispatch(setCourses(fetchedCourses));
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, showAll]);
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const onAddNewCourse = async () => {
    try {
      console.log("Current user:", currentUser);
      console.log("Course data:", course);
      const newCourse = await client.createCourse(course);
      console.log("Course created successfully:", newCourse);
      dispatch(setCourses([...courses, newCourse]));

      // Add enrollment to Redux state since user is auto-enrolled on course creation
      if (currentUser) {
        dispatch(
          addEnrollment({
            user: (currentUser as any)._id,
            course: newCourse._id,
          })
        );
      }
    } catch (error: any) {
      console.error("Error creating course:", error);
      console.error("Error response:", error.response?.data);
      console.error("Error status:", error.response?.status);
      const errorMessage =
        error.response?.data?.message || error.message || "Unknown error";
      alert(`Failed to create course: ${errorMessage}`);
    }
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      )
    );
  };

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
            {showAll ? "Show Enrollments" : "Show All Courses"}
          </button>
        </div>
      </div>
      <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={onAddNewCourse}
        >
          {" "}
          Add{" "}
        </button>
        <button
          onClick={onUpdateCourse}
          className="btn btn-secondary float-end"
          id="wd-update-course-click"
        >
          {" "}
          Update
        </button>
      </h5>
      <br />
      <FormControl
        value={course.name}
        className="mb-2"
        placeholder="Course Name"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        value={course.number}
        className="mb-2"
        placeholder="Course Number"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <Row className="mb-2">
        <Col>
          <FormControl
            type="date"
            value={course.startDate}
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
        </Col>
        <Col>
          <FormControl
            type="date"
            value={course.endDate}
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
        </Col>
      </Row>
      <FormControl
        as="textarea"
        value={course.description}
        rows={3}
        placeholder="Course Description"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => {
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
                        className="btn btn-danger"
                        onClick={(event) => {
                          event.preventDefault();
                          onDeleteCourse(course._id);
                        }}
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
                            onClick={async (e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              try {
                                await enrollmentsClient.unenrollFromCourse(
                                  course._id
                                );
                                dispatch(
                                  removeEnrollmentByUserCourse({
                                    user: (currentUser as any)._id,
                                    course: course._id,
                                  })
                                );
                              } catch (error) {
                                console.error(
                                  "Error unenrolling from course:",
                                  error
                                );
                                alert(
                                  "Failed to unenroll from course. Please try again."
                                );
                              }
                            }}
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            className="btn btn-success mt-2"
                            onClick={async (e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              try {
                                await enrollmentsClient.enrollInCourse(
                                  course._id
                                );
                                dispatch(
                                  addEnrollment({
                                    user: (currentUser as any)._id,
                                    course: course._id,
                                  })
                                );
                              } catch (error) {
                                console.error(
                                  "Error enrolling in course:",
                                  error
                                );
                                alert(
                                  "Failed to enroll in course. Please try again."
                                );
                              }
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
