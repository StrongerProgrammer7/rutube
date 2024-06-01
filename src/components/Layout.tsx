import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import SimpleLoadings from "./UI/loadings/SimpleLoading/SimpleLoadings";

const Layout = () => 
{
	return (
		<Suspense fallback={<SimpleLoadings />} >
			<div className="container">
				<Header />
				<Outlet />
			</div>
		</Suspense>
	);
};

export default Layout;
