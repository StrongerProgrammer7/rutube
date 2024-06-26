import { useEffect } from "react";
import { useLocation,useNavigate } from "react-router-dom";

import RoutesPath from "../utils/enum/RoutesPath";

const isFinishPage = (path: string): boolean =>
{
	return path === RoutesPath.ALREADY_FINISH || path === RoutesPath.FINISH;
};

const isFormPage = (path: string): boolean =>
{
	return path === RoutesPath.MAIN || path === RoutesPath.EXTRA_QUESTION;
};

const useAuthGuard = (isCompleted: boolean) => 
{
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() =>
	{
		if (isCompleted && isFormPage(location.pathname))
			return navigate(RoutesPath.ALREADY_FINISH);
		else if (!isCompleted && isFinishPage(location.pathname))
			return navigate(RoutesPath.MAIN);
	},[location.pathname]);
};

export default useAuthGuard;
