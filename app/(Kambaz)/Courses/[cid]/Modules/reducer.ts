import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// minimal typed shapes for modules and lessons
export interface Lesson {
  _id: string;
  name: string;
  description?: string;
  module?: string;
}

export interface Module {
  _id: string;
  name: string;
  description?: string;
  course?: string;
  lessons?: Lesson[];
  editing?: boolean;
}

export interface ModulesState {
  modules: Module[];
}

const initialState: ModulesState = {
  modules: [],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, action: PayloadAction<Module[]>) => {
      state.modules = action.payload;
    },
    addModule: (state, action: PayloadAction<{ name: string; course?: string }>) => {
      const payloadModule = action.payload;
      const newModule: Module = {
        _id: uuidv4(),
        lessons: [],
        name: payloadModule.name,
        course: payloadModule.course,
      };
      state.modules = [...state.modules, newModule];
    },
    deleteModule: (state, action: PayloadAction<string>) => {
      const moduleId = action.payload;
      state.modules = state.modules.filter((m) => m._id !== moduleId);
    },
    updateModule: (state, action: PayloadAction<Module>) => {
      const payloadModule = action.payload;
      state.modules = state.modules.map((m) => (m._id === payloadModule._id ? payloadModule : m));
    },
    editModule: (state, action: PayloadAction<string>) => {
      const moduleId = action.payload;
      state.modules = state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : m
      );
    },
  },
});

export const { addModule, deleteModule, updateModule, editModule, setModules } = modulesSlice.actions;
export default modulesSlice.reducer;