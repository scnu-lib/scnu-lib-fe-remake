import Index from "./pages";
import ActivitiesDetail from "./pages/activities-detail";

interface RoutersItem {
	title: string;
	component: React.FC;
	path: string;
}
const routers: Array<RoutersItem> = [
	{ title: "阅马活动平台", component: Index, path: "/" },
	{ title: "活动activities", component: ActivitiesDetail, path: "/activities" },
];
/**
 * 对路由进行封装
 * 1. 动态修改document.title
 * @param RoutersItem
 * @returns 封装后的组件
 */
export const RouterRender = ({ router }: { router: RoutersItem }) => {
	document.title = router.title;
	return <router.component />;
};

export default routers;
