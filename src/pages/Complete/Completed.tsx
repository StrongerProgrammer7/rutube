
import img from "../../assets/already_finish.png";
import BlueButton from "../../components/UI/buttons/BlueButton/BlueButton";
import MainContent from "../../layouts/MainContent/MainContent";
import MainTitle from "../../layouts/MainTitle/MainTitle";

const Completed = () =>
{
	return (
		<MainContent>
			<MainTitle
				text="Спасибо, что делитесь мнением и помогаете нам быть лучше"
				title="Вы уже прошли этот опрос"
				url_img={img}
			/>
			<BlueButton
				textBtn="Перейти на RUTUBE"
				typeBtn="button"
				onClick={() => window.location.href = "https://rutube.ru/"}
			/>
		</MainContent>
	);
};

export default Completed;
