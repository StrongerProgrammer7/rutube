import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

const Layout = () => 
{
	return (
		<Suspense fallback={"...loading"} >

			<div className="container">
				<Header />
				<Outlet />
			</div>
		</Suspense>
	);
};

export default Layout;
