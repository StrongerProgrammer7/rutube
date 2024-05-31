import css from "./extra.module.css";
import phone from "../../assets/phone.png";
import Form from "../../layouts/Form/Form";
import IFeedback from "../../utils/interfaces/IFeedback";

const Extra = () =>
{
	const handleSubmit = (e: React.FormEvent,feedback: IFeedback[]) =>
	{
		e.preventDefault();
		console.log("Submit data:",feedback);

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
