import styles from './banner.module.scss';
import classNames from 'classnames';
import { Button } from '@douyinfe/semi-ui';
import { IconChevronRight } from '@douyinfe/semi-ui/node_modules/@douyinfe/semi-icons';

type BannerProps = {
    welcomeCn: string,
    welcomeEn: string,
    stateContent: string
    onClick: ()=>void
}
export default function Banner(props: BannerProps){

    return (
        <div className={classNames(styles.bannerContainer)}>
            <div className={styles.backgroundImgContainer}>
                <div className={classNames(styles.backgroundImg)}></div>
                <div className={classNames(styles.backgroundImgShadow)}></div>
            </div>
            <div className={classNames(styles.bannerText)}>
                <p className={classNames(styles.welcomeCnText)}>{props.welcomeCn}</p>
                <p className={classNames(styles.welcomeEnText)}>{props.welcomeEn}</p>
                <p className={classNames(styles.libText)}>{props.stateContent}</p>
                <Button 
                    style={{backgroundColor: 'black'}}
                    icon={<IconChevronRight></IconChevronRight>}
                    iconPosition="right"
                    theme="solid"
                    onClick={props.onClick}
                >点击了解</Button>
            </div>
        </div>
    )
}