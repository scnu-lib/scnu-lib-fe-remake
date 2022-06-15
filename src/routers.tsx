import Index from './pages';
import ActivitiesDetail from './pages/ActivitiesDetail';

interface RoutersItem {
	title: string;
	component: React.FC;
	path: string;
}
const routers: Array<RoutersItem> = [
  { title: '阅马活动平台', component: Index, path: '/' },
  { title: '活动activities', component: ActivitiesDetail, path: '/activities' },
];

export const RouterRender = ({ router }: { router: RoutersItem }) => {
  document.title = router.title;

  return <router.component />;
};

export default routers;
