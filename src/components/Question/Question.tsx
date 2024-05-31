import { FC,memo } from "react";

import css from "./question.module.css";

interface IQuestionProps
{
	required?: boolean;
	question?: string;
	value?: number;
	chooseValue?: number;
	maxDegree?: number;
	extraStyle?:
	{
		paragraph?: string;
		wrapper_btn?: string;
		title_btn?: string;
	},
	labels?: string[];
	startFromZero?: boolean;
	onChange: (value: number) => void;
}
// eslint-disable-next-line
const Question: FC<IQuestionProps> = ({ onChange,question,value,maxDegree,required,extraStyle,labels,chooseValue,startFromZero = true }) =>
{
	const maxCountElem = labels ? labels.length : maxDegree;
	const styleStar = chooseValue !== undefined ? { color: "white" } : { color: "red" };
	return (
		<>
			{
				question &&
				<p className={extraStyle?.paragraph ?? ""}>{question} {required && <span style={styleStar}>*</span>}</p>
			}
			<div className={`${css.wrapper_radio_button} ${extraStyle?.wrapper_btn ?? ""}`}>
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
								<span className={`${css.radio_custom} ${value === val ? css.radio_selected : ""} ${extraStyle?.title_btn ?? ""}`}>
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

// eslint-disable-next-line
export default memo(Question);
