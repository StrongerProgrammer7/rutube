import { createSlice,PayloadAction } from "@reduxjs/toolkit";

import IFeedback from "../utils/interfaces/IFeedback";

type TState =
	{
		feedback: IFeedback;
		extraQuestion: IFeedback[];
		isComleted: boolean,
		error: string | null;
	};
const initialState: TState =
{
	feedback: {
		questionID: 0
	},
	extraQuestion: [
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
				if (action.payload.questionID === 0)
					state.feedback = action.payload;
				else
				{
					const isExists = state.extraQuestion.findIndex((elem) => elem.questionID === action.payload.questionID);
					if (isExists !== -1)
						state.extraQuestion[isExists].responseID = action.payload.responseID;
					else
						state.extraQuestion.push(action.payload);
				}


			},
			setFeedbackAll: (state,action: PayloadAction<IFeedback[]>) =>
			{
				state.extraQuestion = action.payload;
			},
			setFinish: (state,action: PayloadAction<boolean>) =>
			{
				state.isComleted = action.payload;
			}
		}
	}
);

export const { setFeedback,setFeedbackAll,setFinish } = feedbackSlice.actions;

export default feedbackSlice.reducer;
