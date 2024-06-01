import { useCallback,useEffect,useMemo,useState } from "react";

import Question from "../../components/Question/Question";
import BlueButton from "../../components/UI/buttons/BlueButton/BlueButton";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import { setFeedback } from "../../models/feedback";
import css from "./form.module.css";

interface IForm<TArgs = unknown>
{
	handleSubmit: (e: React.FormEvent,...args: TArgs[]) => void;
}
const Form = <TArgs,>({ handleSubmit }: IForm<TArgs>) =>
{
	const feedback = useTypedSelector((state) => state.extraQuestion);
	const firstQuestion = useTypedSelector((state) => state.feedback);
	const dispatch = useAppDispatch();

	const [isAllResponse,setIsAllResponse] = useState<boolean>(false);

	const handleResponseChangeRadioBtn = useCallback((question: number,value: number) =>
	{
		dispatch(setFeedback({ questionID: question,responseID: value }));
	},[dispatch]);

	useEffect(() =>
	{
		const isAllChoose = feedback.every((elem) => elem.responseID !== undefined);
		if (isAllChoose)
			setIsAllResponse(true);
	},[feedback]);

	const questions = useMemo((): string[] =>
	{
		return [
			" Клиентский сервис RUTUBE помог в решении проблемы?",
			" Специалист RUTUBE хорошо изъяснялся и владел языком?",
			" Специалист RUTUBE был отзывчив?",
			" Специалист RUTUBE был компетентен?",
			" Какова вероятность того, что вы порекомендуете RUTUBE коллеге или другу?"

		];
	},[]);

	return (
		<form onSubmit={(e) => handleSubmit(e,[firstQuestion,...feedback] as TArgs)}
			className={css.form}>
			<div className={css.form__question}>
				<Question
					question="1. Как быстро вы&nbsp;получили ответ от&nbsp;клиентского сервиса RUTUBE?"
					value={feedback[0]?.responseID}
					onChange={(value) => handleResponseChangeRadioBtn(feedback[0].questionID,value)}
					required
					labels={["Быстрее, чем ожидал","Как и ожидал","Медленнее, чем ожидал"]}
					extraCss={
						{
							questionParagraph: css.form__text_question,
							titleRadioBtn: css.title_radion_btn,
							wrapperRadioBtns: css.wrapper_radio_btns
						}
					}
					isChoosenValue={feedback[0]?.responseID ? true : false}
				/>
			</div>
			{
				questions.map((question,index) => 
				{
					return (
						<div key={index} className={css.form__question}>
							<Question
								question={`${index + 2}. ${question}`}
								value={feedback[index + 1]?.responseID}
								onChange={(value) => handleResponseChangeRadioBtn(feedback[index + 1].questionID,value)}
								required
								maxRaiting={index === questions.length - 1 ? 11 : 5}
								startFromZero={index === questions.length - 1 ? true : false}
								extraCss={
									{
										questionParagraph: css.form__text_question
									}
								}
								isChoosenValue={feedback[index + 1]?.responseID ? true : false}
							/>
						</div>
					);
				})
			}
			<div className={css.wrapper_submit}>
				<BlueButton
					disabled={!isAllResponse}
					typeBtn="submit"
					textBtn="Отправить ответы"
					extraClassBtn={`${css.btn} ${!isAllResponse ? css.btn_disable : ""}`}
				/>

			</div>
		</form>
	);
};

export default Form;
