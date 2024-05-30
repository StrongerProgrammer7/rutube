import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";

const Layout = () => 
{
	return (
		<Suspense fallback={"...loading"} >
			<Header />
			<div>
				<Outlet />
			</div>
		</Suspense>
	);
};

export default Layout;
