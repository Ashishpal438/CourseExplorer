import { createSlice } from '@reduxjs/toolkit';

const enrolledCoursesSlice = createSlice({
  name: 'enrolledCourses',
  initialState: {
    enrolledCourses: [],
  },
  reducers: {
    enrollCourse: (state, action) => {
      const course = action.payload;
      if (!state.enrolledCourses.find((c) => c.id === course.id)) {
        state.enrolledCourses.push(course);
      }
    },
    unenrollCourse: (state, action) => {
      const courseId = action.payload;
      state.enrolledCourses = state.enrolledCourses.filter((c) => c.id !== courseId);
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrolledCoursesSlice.actions;
export default enrolledCoursesSlice.reducer;
