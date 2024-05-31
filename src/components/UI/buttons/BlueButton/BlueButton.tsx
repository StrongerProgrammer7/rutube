import { FC } from "react";
import css from "./bluebutton.module.css";

interface IBlueButton
{
	typeBtn: "button" | "submit" | "reset";
	textBtn: string;
	onClick?: () => void;
}

const BlueButton: FC<IBlueButton> = ({ textBtn,typeBtn,onClick }) =>
{
	return (
		<button
			className={css.btn}
			type={typeBtn}
			onClick={onClick}>
			{textBtn}
		</button>
	);
};

export default BlueButton;
