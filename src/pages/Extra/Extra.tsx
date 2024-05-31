import css from "./extra.module.css";
import phone from "../../assets/phone.png";
import Form from "../../layouts/Form/Form";
import IFeedback from "../../utils/interfaces/IFeedback";
import { delayBeforeMoveToOtherPage } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import RoutesPath from "../../utils/enum/RoutesPath";
import { useTypedSelector } from "../../hooks/useTypesSelector";
import { useEffect } from "react";

const Extra = () =>
{
	const feedbackStart = useTypedSelector((state) => state.feedback);
	const isCompleted = useTypedSelector((state) => state.isComleted);
	const navigate = useNavigate();
	const handleSubmit = (e: React.FormEvent,feedback: IFeedback[]) =>
	{
		e.preventDefault();
		console.log("Submit data:",feedback);
		delayBeforeMoveToOtherPage(navigate)(RoutesPath.FINISH);
	};

	useEffect(() =>
	{
		if (isCompleted)
			return navigate(RoutesPath.ALREADY_FINISH);
		if (!feedbackStart.responseID)
			return navigate(RoutesPath.MAIN);
	},[]);

	return (
		<section className={css.extra_content}>
			<div>
				<p className={css.extra_content__title}>Пожалуйста,&nbsp;ответьте&nbsp;на&nbsp;дополнительные вопросы.</p>
				<Form<IFeedback[]>
					handleSubmit={handleSubmit}
				/>
			</div>
			<div className={css.wrapper_img}>
				<img src={phone} alt="phone" />
			</div>
		</section>
	);
};

export default Extra;
