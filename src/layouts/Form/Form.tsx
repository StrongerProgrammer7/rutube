import { useState,useCallback,useEffect,useMemo,FC } from "react";
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
		<form onSubmit={(e) => handleSubmit(e,feedback as TArgs)}>
			<div className={css.extra_content__form_question}>
				<Question
					question="1. Как быстро вы&nbsp;получили ответ от&nbsp;клиентского сервиса RUTUBE?"
					value={feedback[1]?.responseID}
					onChange={(value) => handleResponseChangeRadioBtn(feedback[1].questionID,value)}
					required
					labels={["Быстрее, чем ожидал","Как и ожидал","Медленнее, чем ожидал"]}
					extraStyle={
						{
							paragraph: css.extra_content__form_text,
							title_btn: css.question_btn,
							wrapper_btn: css.question_btn_wrapper
						}
					}
					chooseValue={feedback[1]?.responseID}
				/>
			</div>
			{
				questions.map((question,index) => 
				{
					return (
						<div key={index} className={css.extra_content__form_question}>
							<Question
								question={`${index + 2}. ${question}`}
								value={feedback[index + 2]?.responseID}
								onChange={(value) => handleResponseChangeRadioBtn(feedback[index + 2].questionID,value)}
								required
								maxDegree={index === questions.length - 1 ? 11 : 5}
								startFromZero={index === questions.length - 1 ? true : false}
								extraStyle={
									{
										paragraph: css.extra_content__form_text
									}
								}
								chooseValue={feedback[index + 2]?.responseID}
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
				/>
			</div>
		</form>
	);
};

export default Form;
