import { Typography, Avatar, AvatarGroup } from '@douyinfe/semi-ui';
import styles from './LibFooter.module.scss';
const { Title, Text } = Typography;

export default function LibFooter(){

  return (
    <div className={styles.footerContainer}>
      <Title className={styles.titleFont}>华南师大|图书馆活动管理系统</Title>
      <div className={styles.contentContainer}>
        <Text className={styles.textFont}>负责人: 谭老师</Text>
        <div className={styles.avatarContainer}>
          <Text className={styles.textFont}>网站开发: </Text>
          <AvatarGroup></AvatarGroup>
        </div>
        <Text className={styles.textFont}>平台招新: yuquelink</Text>
      </div>
    </div>
  );
}
