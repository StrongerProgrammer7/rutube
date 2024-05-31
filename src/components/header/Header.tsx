import css from "./header.module.css";

const Header = () => 
{
	return (
		<header className={css.header}>
			<div className={css.header_logo}>
				<h1 className={css.header_logo__title}>rutube <div className={css.header_logo__circle}></div></h1>

			</div>
			<div className={css.header_line}></div>
		</header>
	);
};

export default Header;
