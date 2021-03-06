import Banner from '../components/Banner';
import StateZone from '../components/StateZone';
import { useNavigate } from 'react-router-dom';
import Study from '../assets/svg/undraw_bibliophile_re_xarc.svg';
import CardList from '../components/CardList';
import Newspaper from '../assets/svg/newspaper.svg';
import Studying from '../assets/svg/studying.svg';
import styles from './index.module.scss';
import LibFooter from '../components/LibFooter';

export default function Index() {
  const navigationTo = useNavigate();

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Banner
        welcomeCn='欢迎'
        welcomeEn='welcome'
        stateContent='华南师范大学图书馆'
        onClick={() => navigationTo('/activities')}
      />
      <StateZone
        reverse={false}
        titleCn={'关于我们'}
        titleEn={'About us'}
        content={'我们是华南师范大学图书馆管理平台，在这里可以获取到关于图书馆的活动信息'}
        svgSrc={Study}
      />
      <StateZone
        style={{ backgroundColor: 'rgba(216, 238, 254, 0.38)' }}
        reverse={false}
        titleCn={'图书馆活动'}
        titleEn={'Activities'}
        content={
          <CardList
            contentList={[
              {
                name: '阅读马拉松',
                imgElement: (
                  <div
                    style={{ background: `url(${Studying}) no-repeat center` }}
                    className={styles.showCardImg}
                  ></div>
                ),
              },
              {
                name: '阅读接力365',
                imgElement: (
                  <div
                    style={{ background: `url(${Newspaper}) no-repeat center` }}
                    className={styles.showCardImg}
                  ></div>
                ),
              },
            ]}
            showTips={'更多活动将陆续添加~'}
          />
        }
      />
      <LibFooter />
    </div>
  );
}
