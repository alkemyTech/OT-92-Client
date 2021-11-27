import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./category/categorySlice";
import counterReducer from "../features/counter/counterSlice";
import sliceBackOffice from "./backOffice/SlicesBackOffice";
import activitiesReducer from "../../src/store/activity/activitySlice";
import membersSlice from "./members/membersSlice";
import newsSlice from "./news/newsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    categories: categoriesReducer,
    listSlice: sliceBackOffice,
    activities: activitiesReducer,
    members: membersSlice,
    news: newsSlice,
  },
});
