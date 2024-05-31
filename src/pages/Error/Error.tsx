import { useNavigate } from "react-router-dom";

import img from "../../assets/already_finish.png";
import BlueButton from "../../components/UI/buttons/BlueButton/BlueButton";
import MainContent from "../../layouts/MainContent/MainContent";
import MainTitle from "../../layouts/MainTitle/MainTitle";
import RoutesPath from "../../utils/enum/RoutesPath";

const Error = () =>
{
	const navigate = useNavigate();

	const returnBack = () =>
	{
		navigate(RoutesPath.MAIN);
	};
	return (
		<MainContent>
			<MainTitle
				title="Уважаемый клиент!"
				text="Такой страницы не существует"
				url_img={img}
			/>
			<BlueButton
				textBtn="Вернуться на главную"
				typeBtn="button"
				onClick={returnBack}
			/>
		</MainContent>
	);
};

export default Error;
