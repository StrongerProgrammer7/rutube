import { configureStore } from "@reduxjs/toolkit";
//import logger from "redux-logger";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import feedbackReducer from "../models/feedback";

const feedbackPersistConfig =
{
	key: "feedback",
	storage
};

const persistFeedbackReducer = persistReducer(feedbackPersistConfig,feedbackReducer);
const store = configureStore(
	{
		reducer: persistFeedbackReducer,
		devTools: false,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			serializableCheck: false
		})//.concat(logger)
	}
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export default store;
