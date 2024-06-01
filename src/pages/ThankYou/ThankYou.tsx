import img from "../../assets/finish.png";
import BlueButton from "../../components/UI/buttons/BlueButton/BlueButton";
import MainContent from "../../layouts/MainContent/MainContent";
import MainTitle from "../../layouts/MainTitle/MainTitle";

const ThankYou = () =>
{
	return (
		<MainContent>
			<MainTitle
				text="Это поможет нам улучшить сервис"
				title="Спасибо за обратную связь!"
				url_img={img}
			/>
			<BlueButton
				textBtn="Перейти на платформу"
				typeBtn="button"
				onClick={() => console.log("Some people")}
			/>
		</MainContent>
	);
};

export default ThankYou;
