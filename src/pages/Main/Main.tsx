import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import img from "../../assets/main.png";
import Question from "../../components/Question/Question";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import { setFeedback } from "../../models/feedback";
import RoutesPath from "../../utils/enum/RoutesPath";
import css from "./main.module.css";
import MainTitle from "../../layouts/MainTitle/MainTitle";

const Main = () =>
{
	const feedback = useTypedSelector((state) => state.feedback);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleResponseChange = useCallback((question: number,value: number) =>
	{
		dispatch(setFeedback({ questionID: question,responseID: value }));
		setTimeout(() =>
		{
			navigate(RoutesPath.EXTRA_QUESTION);
		},500);
	},[dispatch,navigate]);

	return (
		<main className={css.main_content}>
			<MainTitle
				text="Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по данному обращению, используя шкалу от 0 до 9, где 0 является «Хуже некуда» и 9 — «Отлично»."
				title="Уважаемый клиент!"
				url_img={img}
			/>
			{
				<div className={css.main_content__wrapper_question}>
					<Question
						value={feedback?.responseID}
						onChange={(value) => handleResponseChange(feedback.questionID,value)}
						extraStyle={{ wrapper_btn: css.wrapper_btns }}
					/>
					<div className={css.main_content__question_labels}>
						<p>Хуже&nbsp;некуда</p>
						<p>Отлично</p>
					</div>
				</div>
			}
		</main>
	);
};

export default Main;
