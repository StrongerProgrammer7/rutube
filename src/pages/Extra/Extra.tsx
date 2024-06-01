import { useNavigate,To } from "react-router-dom";

import phone from "../../assets/phone.png";
import Form from "../../layouts/Form/Form";
import RoutesPath from "../../utils/enum/RoutesPath";
import { delayBeforeMoveToOtherPage } from "../../utils/helper";
import IFeedback from "../../utils/interfaces/IFeedback";
import css from "./extra.module.css";
import { setFinish } from "../../models/feedback";
import { useAppDispatch } from "../../hooks/useTypedDispatch";

const Extra = () =>
{
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleSubmit = (e: React.FormEvent,feedback: IFeedback[]) =>
	{
		e.preventDefault();
		console.log("Submit data:",feedback);
		delayBeforeMoveToOtherPage<(to: To) => void>(navigate)(RoutesPath.FINISH);
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
