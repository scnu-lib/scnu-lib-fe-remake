import { useRecoilValue } from 'recoil';
import {activityDetail} from '../../store';
import { Typography } from '@douyinfe/semi-ui';
import styles from './index.module.scss';


export default function ActivityDetail() {
  const relevantDetail = useRecoilValue(activityDetail);
  const { Title } = Typography;
  
  return <div className={styles.activityDetail}>
    <div className={styles.activityImgContainer}>
      <img src={relevantDetail.img} className= {styles.activityImg}/>
    </div>
    <div className={styles.detailText}>
      <Title heading={1}>{relevantDetail.title}</Title>
    </div>

  </div>;
}
