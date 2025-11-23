import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./features/projects";
import profileReducer from "./features/profileData";
import technologyReducer from "./features/technologies";
import educationReducer from "./features/education";
import experienceReducer from "./features/experience";

export const makeStore = () =>
  configureStore({
    reducer: {
      project: projectReducer,
      profile: profileReducer,
      technology: technologyReducer,
      education: educationReducer,
      experience: experienceReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
