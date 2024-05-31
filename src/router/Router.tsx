import { lazy } from "react";

import RoutesPath from "../utils/enum/RoutesPath";

interface IRouterItem
{
	key: string;
	path: string;
	index?: boolean;
	component: JSX.Element | null;
}

// eslint-disable-next-line
const Main = lazy(() => import("../pages/Main/Main"));
// eslint-disable-next-line
const Extra = lazy(() => import("../pages/Extra/Extra"));
// eslint-disable-next-line
const ThankYou = lazy(() => import("../pages/ThankYou/ThankYou"));
// eslint-disable-next-line
const Completed = lazy(() => import("../pages/Complete/Completed"));

export const routes: IRouterItem[] =
	[
		{ key: "0x1",path: RoutesPath.MAIN,index: true,component: <Main /> },
		{ key: "0x2",path: RoutesPath.EXTRA_QUESTION,component: <Extra /> },
		{ key: "0x3",path: RoutesPath.FINISH,component: <ThankYou /> },
		{ key: "0x4",path: RoutesPath.ALREADY_FINISH,component: <Completed /> }
		// { key: "0x7",path: "*",component: <Error /> }
	];
