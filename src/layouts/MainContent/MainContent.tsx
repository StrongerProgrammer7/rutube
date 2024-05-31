import css from "./maincontent.module.css";

type TMainContent = {
	children: string | JSX.Element | JSX.Element[] | React.ReactNode;
};

const MainContent = ({ children }: TMainContent) =>
{
	return (
		<main className={css.main_content}>
			{children}
		</main>
	);
};

export default MainContent;
