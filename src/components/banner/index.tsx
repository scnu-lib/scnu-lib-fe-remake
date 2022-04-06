import styles from './banner.module.scss';
import classNames from 'classnames';
import { Button } from '@douyinfe/semi-ui';
import { IconChevronRight } from '@douyinfe/semi-ui/node_modules/@douyinfe/semi-icons';

export default function Banner(){

    return (
        <div className={classNames(styles.bannerContainer)}>
            <div className={classNames(styles.backgroundImg)}></div>
            <div className={classNames(styles.bannerText)}>
                <p className={classNames(styles.welcomeCnText)}>欢迎</p>
                <p className={classNames()}>华南师范大学图书馆</p>
                <Button 
                    style={{backgroundColor: 'black'}}
                    icon={<IconChevronRight></IconChevronRight>}
                    iconPosition="right"
                    theme="solid"
                >点击了解</Button>
            </div>
        </div>
    )
}