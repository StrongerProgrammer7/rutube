import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import IFeedback from "../utils/interfaces/IFeedback";

type TState =
	{
		feedback: IFeedback[];
		isComleted: boolean,
		error: string | null;
	};
const initialState: TState =
{
	feedback: [
		{
			questionID: 0
		},
		{
			questionID: 1
		},
		{
			questionID: 2
		},
		{
			questionID: 3
		},
		{
			questionID: 4
		},
		{
			questionID: 5
		},
		{
			questionID: 6
		}
	],
	error: null,
	isComleted: false
};

const feedbackSlice = createSlice(
	{
		name: "feedback",
		initialState,
		reducers:
		{
			setFeedback: (state,action: PayloadAction<IFeedback>) =>
			{
				const isExists = state.feedback.findIndex((elem) => elem.questionID === action.payload.questionID);
				if (isExists !== -1)
					state.feedback[isExists].responseID = action.payload.responseID;
				else
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
