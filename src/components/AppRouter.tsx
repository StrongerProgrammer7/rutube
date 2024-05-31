import { Route,Routes } from "react-router-dom";

import { routes } from "../router/Router";
import RoutesPath from "../utils/enum/RoutesPath";
import Layout from "./Layout";
import { useTypedSelector } from "../hooks/useTypesSelector";
import useAuthGuard from "../hooks/useAuthGuards";

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
