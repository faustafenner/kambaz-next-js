import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { assignments as dbAssignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

export interface Assignment {
  _id: string;
  title: string;
  course?: string;
  modules?: string[];
  availableFrom?: string;
  dueDate?: string;
  points?: number;
  category?: string;
  description?: string;
}

export interface AssignmentsState {
  assignments: Assignment[];
}

const initialState: AssignmentsState = {
  assignments: dbAssignments as Assignment[],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action: PayloadAction<Omit<Assignment, "_id">>) => {
      const payload = action.payload;
      const newAssignment: Assignment = {
        _id: uuidv4(),
        title: payload.title,
        course: payload.course,
        modules: payload.modules || [],
        availableFrom: payload.availableFrom,
        dueDate: payload.dueDate,
        points: payload.points,
        category: payload.category,
        description: payload.description,
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.assignments = state.assignments.filter((a) => a._id !== id);
    },
    updateAssignment: (state, action: PayloadAction<Assignment>) => {
      const updated = action.payload;
      state.assignments = state.assignments.map((a) =>
        a._id === updated._id ? updated : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
