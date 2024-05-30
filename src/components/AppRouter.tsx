import { Route,Routes } from "react-router-dom";
import Layout from "./Layout";
import { routes } from "../router/Router";
import RoutesPath from "../utils/enum/RoutesPath";

const AppRouter = () => 
{
	return (

		<Routes>
			<Route path={RoutesPath.MAIN} element={<Layout />}>
				{
					routes.map((route) =>
					{
						return (
							<Route key={route.key} path={route.path} index={route?.index ?? false} element={route.component} />
						);
					})
				}
			</Route>
		</Routes>

	);
};

export default AppRouter;
