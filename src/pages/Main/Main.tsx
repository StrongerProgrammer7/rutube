import css from "./main.module.css";
import main from "../../assets/main.png";
import Question from "../../components/Question/Question";
import { useState } from "react";

const Main = () =>
{
	const [responses,setResponses] = useState({
		questionId: 0,
		value: 0,
	});
	const handleResponseChange = (question: number,value: number) =>
	{

		console.log(responses);
		setResponses({ questionId: question,value: value });
		console.log(question,value,responses);
	};

	return (
		<main className={css.main_content}>
			<div className={css.wrapper_img}>
				<img src={main} alt="hello img" />
			</div>
			<div className={css.main_content__wrapper}>
				<h1 className={css.main_content__title}>Уважаемый клиент!</h1>
				<p className={css.main_content__text}>Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по данному обращению, используя шкалу от 0 до 9, где 0 является «Хуже некуда» и 9 — «Отлично».</p>

			</div>
			<div className={css.main_content__wrapper_question}>
				<Question
					value={responses.value}
					onChange={(value) => handleResponseChange(responses.questionId,value)}
				/>
				<div className={css.main_content__question_labels}>
					<p>Хуже некуда</p>
					<p>Отлично</p>
				</div>
			</div>
		</main>
	);
};

export default Main;
