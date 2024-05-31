import css from "./main.module.css";
import main from "../../assets/main.png";

const Main = () =>
{
	return (
		<main className={css.main_content}>
			<div className={css.main_content__img}>
				<img src={main} alt="hello img" />
			</div>
			<div className={css.main_content__wrapper}>
				<h1 className={css.main_content__title}>Уважаемый клиент!</h1>
				<p className={css.main_content__text}>Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по данному обращению, используя шкалу от 0 до 9, где 0 является «Хуже некуда» и 9 — «Отлично».</p>
			</div>
		</main>
	);
};

export default Main;
