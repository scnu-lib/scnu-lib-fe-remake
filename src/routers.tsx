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

const DomTitle = ({ item }: { item: RoutersItem }) => {
	document.title = item.title;
	return <item.component />;
};
export { DomTitle };
export default routers;
