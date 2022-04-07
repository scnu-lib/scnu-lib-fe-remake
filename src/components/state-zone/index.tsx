import classNames from "classnames";
import styles from "./state-zone.module.scss";

type StatezoneProps = {
    reverse: boolean,
    svgSrc: string,
    titleCn: string,
    titleEn: string,
    content: string
}
export default function Statezone(props: StatezoneProps){

    return (
        <div className={classNames(styles.stateContainer, {[styles.flexReverse]: props.reverse})}>
            <div className={classNames(styles.introduceContainer)}>
                <p className={styles.titleTextCn}>{props.titleCn}</p>
                <p className={styles.titleTextEn}>{props.titleEn}</p>
                <p className={styles.contentText}>{props.content}</p>
            </div>
            <div className={classNames(styles.pictureContainer)}>
                <div 
                    style={{backgroundImage: `url(${props.svgSrc})`}}
                    className={classNames(styles.backgroundImg)}
                ></div>
                <div className={classNames(styles.backgroundImgShadow)}></div>
            </div>
        </div>
    )
}