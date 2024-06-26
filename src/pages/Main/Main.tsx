import { useCallback } from "react";
import { To,useNavigate } from "react-router-dom";

import img from "../../assets/main.png";
import Question from "../../components/Question/Question";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import MainContent from "../../layouts/MainContent/MainContent";
import MainTitle from "../../layouts/MainTitle/MainTitle";
import { setFeedback } from "../../models/feedback";
import RoutesPath from "../../utils/enum/RoutesPath";
import { delayBeforeMoveToOtherPage } from "../../utils/helper";
import css from "./main.module.css";


const Main = () =>
{
	const feedback = useTypedSelector((state) => state.feedback);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleResponseChange = useCallback((question: number,value: number) =>
	{
		dispatch(setFeedback({ questionID: question,responseID: value }));
		delayBeforeMoveToOtherPage<(to: To) => void>(navigate)(RoutesPath.EXTRA_QUESTION);
	},[dispatch,navigate]);

	return (
		<MainContent>
			<MainTitle
				text="Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по&nbsp;данному обращению, используя шкалу от&nbsp;0&nbsp;до&nbsp;9, где 0&nbsp;является &laquo;Хуже некуда&raquo; и&nbsp;9&nbsp;&mdash; &laquo;Отлично&raquo;"
				title="Уважаемый клиент!"
				url_img={img}
			/>
			{
				<div className={css.main_content__wrapper_question}>
					<Question
						value={feedback?.responseID}
						onChange={(value) => handleResponseChange(feedback.questionID,value)}
						extraCss={{ wrapperRadioBtns: css.wrapper_btns }}
					/>
					<div className={css.question_labels}>
						<p>Хуже&nbsp;некуда</p>
						<p>Отлично</p>
					</div>
				</div>
			}
		</MainContent>
	);
};

export default Main;
