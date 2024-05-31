import { Route,Routes } from "react-router-dom";

import useAuthGuard from "../hooks/useAuthGuards";
import { useTypedSelector } from "../hooks/useTypesSelector";
import { routes } from "../router/Router";
import RoutesPath from "../utils/enum/RoutesPath";
import Layout from "./Layout";

const AppRouter = () => 
{
	const isCompleted = useTypedSelector((state) => state.isComleted);

	useAuthGuard(isCompleted);
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
