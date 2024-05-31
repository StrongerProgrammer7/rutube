import css from "./main.module.css";
import main from "../../assets/main.png";
import Question from "../../components/Question/Question";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import { setFeedback } from "../../models/feedback";
import { useNavigate } from "react-router-dom";
import RoutesPath from "../../utils/enum/RoutesPath";
import { useCallback } from "react";

const Main = () =>
{
	const feedback = useTypedSelector((state) => state.feedback.find((elem) => elem.questionID === 0));
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleResponseChange = useCallback((question: number,value: number) =>
	{
		dispatch(setFeedback({ questionID: question,responseID: value }));
		setTimeout(() =>
		{
			navigate(RoutesPath.EXTRA_QUESTION);
		},500);
	},[]);

	return (
		<main className={css.main_content}>
			<div className={css.wrapper_img}>
				<img src={main} alt="hello img" />
			</div>
			<div className={css.main_content__wrapper}>
				<h1 className={css.main_content__title}>Уважаемый клиент!</h1>
				<p className={css.main_content__text}>Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по данному обращению, используя шкалу от 0 до 9, где 0 является «Хуже некуда» и 9 — «Отлично».</p>

			</div>
			{
				feedback &&
				<div className={css.main_content__wrapper_question}>
					<Question
						value={feedback.responseID}
						onChange={(value) => handleResponseChange(feedback.questionID,value)}
						extraStyle={{ wrapper_btn: css.wrapper_btns }}
					/>
					<div className={css.main_content__question_labels}>
						<p>Хуже некуда</p>
						<p>Отлично</p>
					</div>
				</div>
			}
		</main>
	);
};

export default Main;
