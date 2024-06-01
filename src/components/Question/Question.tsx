import { FC,memo } from "react";

import css from "./question.module.css";

interface IQuestionProps
{
	required?: boolean;
	question?: string;
	value?: number;
	isChoosenValue?: boolean;
	maxRaiting?: number;
	extraCss?:
	{
		questionParagraph?: string;
		wrapperRadioBtns?: string;
		titleRadioBtn?: string;
	},
	labels?: string[];
	startFromZero?: boolean;
	onChange: (value: number) => void;
}

const Question: FC<IQuestionProps> = ({ onChange,question,value,maxRaiting,required,extraCss,labels,isChoosenValue = false,startFromZero = true }) =>
{
	const maxCountElem = labels ? labels.length : maxRaiting;
	const styleStar = isChoosenValue ? { color: "white" } : { color: "red" };
	return (
		<>
			{
				question &&
				<p className={extraCss?.questionParagraph ?? ""}>{question} {required && <span style={styleStar}>*</span>}</p>
			}
			<div className={`${css.wrapper_radio_button} ${extraCss?.wrapperRadioBtns ?? ""}`}>
				{
					[...Array(maxCountElem ?? 10)].map((_,index) =>
					{
						const val = startFromZero ? index : index + 1;
						return (
							<label key={index} className={css.radio_label}>
								<input
									type="radio"
									value={val}
									checked={value ? value === val : false}
									onChange={() => onChange(val)}
									className={css.radio_input}
									style={{ display: "none" }}
									required={required ?? false}
								/>
								<span className={`${css.radio_custom} ${value === val ? css.radio_selected : ""} ${extraCss?.titleRadioBtn ?? ""}`}>
									{labels && labels[index]}
									{!labels && startFromZero && index}
									{!labels && !startFromZero && index + 1}
								</span>
							</label>
						);
					})
				}
			</div>
		</>
	);
};

export default memo(Question);
