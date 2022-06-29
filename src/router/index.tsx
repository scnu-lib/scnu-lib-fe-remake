import Index from '../pages';
import ActivitiesList from '../pages/ActivitiesList';
import NormalActivity from '../pages/NormalActivity';
import VolunteerActivity from '../pages/VolunteerActivity';

interface RoutersItem {
  title: string;
  component: React.FC;
  path: string;
}

const routers: Array<RoutersItem> = [
  { title: '阅马活动平台', component: Index, path: '/' },
  { title: '活动activities', component: ActivitiesList, path: '/activities' },
  { title: '普通活动', component: NormalActivity, path: '/normal-activity' },
  { title: '志愿者活动', component: VolunteerActivity, path: '/volunteer-activity' },
];

export const RouterRender = ({ router }: { router: RoutersItem }) => {
  document.title = router.title;

  return <router.component />;
};

export default routers;
