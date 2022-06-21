import Navigation from '../components/Nav';
import styles from './layouts.module.scss';
import { Icon } from '@douyinfe/semi-ui';
import { ReactComponent as BookLogo } from '../assets/svg/bookLogo.svg';

export default function Layouts(props: { children: JSX.Element }) {
  return (
    <div className={styles.windowContainer}>
      <Navigation
        indexNav={{imgSrc: <Icon svg={<BookLogo style={{ width: 20, height: 20 }} />} />, title: '阅马平台', path: '/'}}
        itemPath={[
          { title: '活动列表', path: '/activities' },
          {
            title: '我的活动',
            subRouter: [
              { title: '普通活动', path: '/normal-activity' },
              { title: '志愿者活动', path: '/volunteer-activity' },
            ],
          },
        ]}
      />
      <div className={styles.showPageContainer}>{props.children}</div>
    </div>
  );
}
