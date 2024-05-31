import css from "./extra.module.css";
import phone from "../../assets/phone.png";
import Form from "../../layouts/Form/Form";
import IFeedback from "../../utils/interfaces/IFeedback";
import { delayBeforeMoveToOtherPage } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import RoutesPath from "../../utils/enum/RoutesPath";
import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { setFinish } from "../../models/feedback";

const Extra = () =>
{
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const handleSubmit = (e: React.FormEvent,feedback: IFeedback[]) =>
	{
		e.preventDefault();
		console.log("Submit data:",feedback);
		delayBeforeMoveToOtherPage(navigate)(RoutesPath.FINISH);
		dispatch(setFinish(true));
	};

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
