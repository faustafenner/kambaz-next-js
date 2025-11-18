/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

// Configure axios to include credentials (for session-based auth)
const axiosWithCredentials = axios.create({
  withCredentials: true,
});

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${HTTP_SERVER}/api/assignments`;

// Get assignments for a course
export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

// Create a new assignment
export const createAssignment = async (courseId: string, assignment: any) => {
  const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/assignments`, assignment);
  return response.data;
};

// Update an assignment
export const updateAssignment = async (assignment: any) => {
  const response = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
  return response.data;
};

// Delete an assignment
export const deleteAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};