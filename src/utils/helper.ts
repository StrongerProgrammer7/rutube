import RoutesPath from "./enum/RoutesPath";

export const delayBeforeMoveToOtherPage = (func: (routerPath: RoutesPath) => void): (routerPath: RoutesPath) => void =>
{
	return (routerPath: RoutesPath) =>
	{
		setTimeout(() =>
		{
			func(routerPath);
		},500);
	};

};
