import { useCallback,useMemo } from "react";
import Question from "../../components/Question/Question";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import { setFeedback } from "../../models/feedback";
import css from "./extra.module.css";

const Extra = () =>
{
	const feedback = useTypedSelector((state) => state.feedback);
	const dispatch = useAppDispatch();

	const handleResponseChange = useCallback((question: number,value: number) =>
	{
		dispatch(setFeedback({ questionID: question,responseID: value }));
	},[]);

	const handleSubmit = (e: React.FormEvent) =>
	{
		e.preventDefault();
		const isExistsNotChoose = feedback.some((elem) => elem.responseID === undefined);
		if (isExistsNotChoose)
		{
			return;
		}

		// Обработка отправки формы
		console.log('Responses:',feedback[2]?.responseID,feedback[3]?.responseID);
	};
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
		<div className={css.extra_content}>
			<p className={css.extra_content__title}>Пожалуйста, ответьте на дополнительные вопросы.</p>
			<form onSubmit={handleSubmit} className={css.extra_content__form}>
				<div className={css.extra_content__form_question}>
					<Question
						question="1. Как быстро вы получили ответ от клиентского сервиса RUTUBE?"
						value={feedback[1]?.responseID}
						onChange={(value) => handleResponseChange(feedback[1].questionID,value)}
						required
						labels={["Быстрее, чем ожидал","Как и ожидал","Медленнее, чем ожидал"]}
						extraStyle={
							{
								paragraph: css.extra_content__form_text,
								title_btn: css.question_btn,
								wrapper_btn: css.question_btn_wrapper
							}
						}
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
									onChange={(value) => handleResponseChange(feedback[index + 2].questionID,value)}
									required
									maxDegree={index === questions.length - 1 ? 10 : 5}
									startFromZero={index === questions.length - 1 ? true : false}
									extraStyle={
										{
											paragraph: css.extra_content__form_text
										}
									}
								/>
							</div>
						);
					})
				}

				<button type="submit">Отправить</button>
			</form>
		</div>
	);
};

export default Extra;
