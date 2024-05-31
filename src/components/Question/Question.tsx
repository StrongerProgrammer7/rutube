import { FC } from "react";
import css from "./question.module.css";

interface QuestionProps
{
	question?: string;
	value?: number;
	onChange: (value: number) => void;
}

const Question: FC<QuestionProps> = ({ question,value,onChange }) =>
{
	return (
		<>
			{
				question &&
				<p>{question}</p>
			}
			<div className={css.wrapper_radio_button}>
				{
					[...Array(10)].map((_,index) =>
					{

						return (
							<label key={index} className={css.radio_label}>
								<input
									type="radio"
									value={index}
									checked={value ? value === index : false}
									onChange={() => onChange(index)}
									className={css.radio_input}
									style={{ display: 'none' }}
								/>
								<span className={`${css.radio_custom} ${value === index ? css.radio_selected : ''}`}>
									{index}
								</span>
							</label>
						);
					})
				}
			</div>
		</>
	);
};

export default Question;
