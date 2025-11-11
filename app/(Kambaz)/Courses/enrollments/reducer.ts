import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments as dbEnrollments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

export interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

export interface EnrollmentsState {
  enrollments: Enrollment[];
}

const STORAGE_KEY = "kambaz.enrollments";

function loadInitialEnrollments(): Enrollment[] {
  try {
    if (typeof window !== "undefined") {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw) as Enrollment[];
      }
    }
  } catch {
    // ignore parse errors
  }
  return dbEnrollments as Enrollment[];
}

function persistEnrollments(enrollments: Enrollment[]) {
  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(enrollments));
    }
  } catch {
    // ignore storage errors
  }
}

const initialState: EnrollmentsState = {
  enrollments: loadInitialEnrollments(),
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, action: PayloadAction<{ user: string; course: string }>) => {
      const payload = action.payload;
      const newEnrollment: Enrollment = {
        _id: uuidv4(),
        user: payload.user,
        course: payload.course,
      };
      state.enrollments = [...state.enrollments, newEnrollment];
      persistEnrollments(state.enrollments);
    },
    deleteEnrollment: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.enrollments = state.enrollments.filter((e) => e._id !== id);
      persistEnrollments(state.enrollments);
    },
    // convenience: remove enrollment by user+course
    removeEnrollmentByUserCourse: (state, action: PayloadAction<{ user: string; course: string }>) => {
      const { user, course } = action.payload;
      state.enrollments = state.enrollments.filter((e) => !(e.user === user && e.course === course));
      persistEnrollments(state.enrollments);
    },
  },
});

export const { addEnrollment, deleteEnrollment, removeEnrollmentByUserCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
