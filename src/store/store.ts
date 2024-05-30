import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import feedbackReducer from "../models/feedback";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const feedbackPersistConfig =
{
	key: "feedback",
	storage
};

const persistFeedbackReducer = persistReducer(feedbackPersistConfig,feedbackReducer);
const store = configureStore(
	{
		reducer: persistFeedbackReducer,
		devTools: process.env.NODE_ENV !== "production",
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			serializableCheck: false
		}).concat(logger)
	}
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export default store;
