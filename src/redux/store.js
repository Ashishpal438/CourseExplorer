import { configureStore } from '@reduxjs/toolkit';
import enrolledCoursesReducer from './slices/enrolledCoursesSlice';

const store = configureStore({
  reducer: {
    enrolledCourses: enrolledCoursesReducer,
  },
});

export default store;
