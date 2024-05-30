import { lazy } from "react";
import RoutesPath from "../utils/enum/RoutesPath";

interface IRouterItem
{
	key: string;
	path: string;
	index?: boolean;
	component: JSX.Element | null;
}

const Main = lazy(() => import("../pages/Main/Main"));

export const routes: IRouterItem[] =
	[
		{ key: "0x1",path: RoutesPath.MAIN,index: true,component: <Main /> },
		// { key: "0x2",path: RoutesPath.PROFILE_DEVELOPER_ROUTE,component: <ProfileDeveloper /> },
		// { key: "0x3",path: RoutesPath.PROFILE_TEAMLEAD_ROUTE,component: <Teamlead /> },
		// { key: "0x4",path: RoutesPath.DICTIONARY,component: <Dictionary /> },
		// { key: "0x5",path: RoutesPath.DICTIONARY_ELEM,component: <DictionaryElem /> },
		// { key: "0x6",path: RoutesPath.SEARCH_REVIEWER,component: <SearchReviewer /> },
		// { key: "0x7",path: "*",component: <Error /> }
	];
