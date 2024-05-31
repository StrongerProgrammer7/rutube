import { FC } from "react";
import css from "./bluebutton.module.css";

interface IBlueButton
{
	typeBtn: "button" | "submit" | "reset";
	textBtn: string;
	onClick?: () => void;
	disabled?: boolean;
	extraClassBtn?: string;
}

const BlueButton: FC<IBlueButton> = ({ textBtn,typeBtn,onClick,extraClassBtn,disabled = false }) =>
{
	return (
		<button
			disabled={disabled}
			className={`${css.btn} ${extraClassBtn ?? ""}`}
			type={typeBtn}
			onClick={onClick}>
			{textBtn}
		</button>
	);
};

export default BlueButton;
