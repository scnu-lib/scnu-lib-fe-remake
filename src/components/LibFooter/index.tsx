import { Typography, Avatar, AvatarGroup } from '@douyinfe/semi-ui';
import { ReactComponent as QqIcon } from '../../assets/svg/qq.svg';
import { ReactComponent as WechatIcon } from '../../assets/svg/wechat.svg';
import { IconGithubLogo, IconUserCardPhone } from '@douyinfe/semi-icons';
import classNames from 'classnames';
import styles from './LibFooter.module.scss';
const { Title, Text } = Typography;

export default function LibFooter(){

  return (
    <div className={styles.footerContainer}>
      <Title className={styles.titleFont}>华南师大|图书馆活动管理系统</Title>
      <div className={styles.contentContainer}>
        <Text className={styles.textFont}>负责人: 谭老师</Text>
        <div className={styles.avatarContainer}>
          <Text className={styles.textFont}>网站开发：</Text>
          <AvatarGroup size='extra-small' maxCount={3}>
            <Avatar color='red' alt='Yang'>Y</Avatar>
            <Avatar color='green' alt='Xu Feng'>XF</Avatar>
            <Avatar color='yellow' alt='Zhuang'>Z</Avatar>
            <Avatar>+3</Avatar>
          </AvatarGroup>
        </div>
        <Text className={styles.textFont}>平台招新: yuquelink</Text>
      </div>
      <Title className={styles.titleFont} style={{marginTop: 30}}>联系我们</Title>
      <div className={classNames(styles.contentContainer, styles.iconContainer)}>
        <QqIcon className={styles.iconSize}/>
        <WechatIcon className={styles.iconSize}/>
        <IconGithubLogo size='large' className={styles.iconSize} />
        <IconUserCardPhone size='large' className={styles.iconSize} />
      </div>
    </div>
  );
}
