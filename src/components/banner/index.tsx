import styles from "./banner.module.scss";
import { Button } from "@douyinfe/semi-ui";
import { IconChevronRight } from "@douyinfe/semi-icons";

type BannerProps = {
    welcomeCn: string,
    welcomeEn: string,
    stateContent: string
    onClick: ()=>void
}
export default function Banner(props: BannerProps){

    return (
        <div className={styles.bannerContainer}>
            <div className={styles.backgroundImgContainer}>
                <div className={styles.backgroundImg}></div>
                <div className={styles.backgroundImgShadow}></div>
            </div>
            <div className={styles.bannerText}>
                <p className={styles.welcomeCnText}>{props.welcomeCn}</p>
                <p className={styles.welcomeEnText}>{props.welcomeEn}</p>
                <p className={styles.libText}>{props.stateContent}</p>
                <Button 
                    className={styles.buttonTheme}
                    icon={<IconChevronRight />}
                    iconPosition="right"
                    theme="solid"
                    onClick={props.onClick}
                >点击了解</Button>
            </div>
        </div>
    )
}