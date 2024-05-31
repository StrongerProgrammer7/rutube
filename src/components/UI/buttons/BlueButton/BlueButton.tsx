import { FC } from "react";
import css from "./bluebutton.module.css";

interface IBlueButton
{
	typeBtn: "button" | "submit" | "reset";
	textBtn: string;
	onClick?: () => void;
	disabled?: boolean;
}

const BlueButton: FC<IBlueButton> = ({ textBtn,typeBtn,onClick,disabled = false }) =>
{
	return (
		<button
			disabled={disabled}
			className={css.btn}
			type={typeBtn}
			onClick={onClick}>
			{textBtn}
		</button>
	);
};

export default BlueButton;
