import MainTitle from '../../layouts/MainTitle/MainTitle';
import img from "../../assets/finish.png";
import MainContent from '../../layouts/MainContent/MainContent';
import BlueButton from '../../components/UI/buttons/BlueButton/BlueButton';
import { useTypedSelector } from '../../hooks/useTypesSelector';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useTypedDispatch';
import { setFinish } from '../../models/feedback';
import RoutesPath from '../../utils/enum/RoutesPath';

const ThankYou = () =>
{
	const feedback = useTypedSelector((state) => state.feedback);
	const extraQuestion = useTypedSelector((state) => state.extraQuestion);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	useEffect(() =>
	{
		const isAllResponse = extraQuestion.every((elem) => elem.responseID !== undefined);
		if (feedback.responseID && isAllResponse)
			dispatch(setFinish(true));
		else
			return navigate(RoutesPath.MAIN);
	},[]);
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
