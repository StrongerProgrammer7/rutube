import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import IFeedback from "../utils/interfaces/IFeedback";

type TState =
	{
		feedback: IFeedback[];
		isLoad: boolean,
		error: string | null;
	};
const initialState: TState =
{
	feedback: [],
	error: null,
	isLoad: false
};

const feedbackSlice = createSlice(
	{
		name: "feedback",
		initialState,
		reducers:
		{
			setFeedback: (state,action: PayloadAction<IFeedback>) =>
			{
				const question = action.payload.questionID;
				const response = action.payload.reponseID;
				if (question && response)
					state.feedback.push(action.payload);
			},
			setFeedbackAll: (state,action: PayloadAction<IFeedback[]>) =>
			{
				state.feedback = action.payload;
			},
			removeFeedback: (state,action: PayloadAction<IFeedback>) =>
			{
				const temp = state.feedback;
				state.feedback = temp.filter((elem) => elem.questionID !== action.payload.questionID);
			}

		}
	}
);

export const { setFeedback,setFeedbackAll,removeFeedback } = feedbackSlice.actions;

export default feedbackSlice.reducer;
