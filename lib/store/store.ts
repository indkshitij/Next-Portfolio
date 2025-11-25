import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./features/projects";
import profileReducer from "./features/profileData";
import technologyReducer from "./features/technologies";
import educationReducer from "./features/education";
import experienceReducer from "./features/experience";
import sidebarReducer from "./features/sidebar";

export const makeStore = () =>
  configureStore({
    reducer: {
      project: projectReducer,
      profile: profileReducer,
      technology: technologyReducer,
      education: educationReducer,
      experience: experienceReducer,
      sidebar: sidebarReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
