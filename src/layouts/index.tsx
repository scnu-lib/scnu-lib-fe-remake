import Navigation from '../components/nav';
import styles from './layouts.module.scss';
import bookLogo from '../source/bookLogo.svg';

export default function Layouts(props: { children: JSX.Element }) {
  return (
    <div className={styles.windowContainer}>
      <Navigation
        indexNav={{
          imgSrc: <img src={bookLogo} alt='index' />,
          title: '阅马平台',
          path: '/',
        }}
        itemPath={[
          { title: '活动列表', path: '/activities' },
          {
            title: '我的活动',
            subRouter: [{ title: '普通活动' }, { title: '志愿者活动' }],
          },
        ]}
      />
      <div className={styles.showPageContainer}>{props.children}</div>
    </div>
  );
}
