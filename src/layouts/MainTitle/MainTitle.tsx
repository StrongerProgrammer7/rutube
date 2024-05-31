import { FC } from "react";

import css from "./maintitle.module.css";

interface IMainTitle
{
  url_img: string;
  title: string;
  text: string;

}
const MainTitle: FC<IMainTitle> = ({ url_img,title,text }) =>
{
	return (
		<>
			<div className={css.wrapper_img}>
				<img src={url_img} alt="img greeter" />
			</div>
			<div className={css.content}>
				<h1 className={css.content__title}>{title}</h1>
				<p className={css.content__text}>{text}</p>

			</div>
		</>
	);
};

export default MainTitle;
