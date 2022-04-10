import classNames from "classnames";
import styles from "./state-zone.module.scss";

type StatezoneProps = {
    style?: object,
    reverse: boolean,
    svgSrc?: string,
    titleCn: string,
    titleEn: string,
    content: string | JSX.Element
}
export default function Statezone(props: StatezoneProps){

    return (
        <div 
            className={classNames(styles.stateContainer, {[styles.flexReverse]: props.reverse})}
            style={props.style}
        >
            <div 
                className={classNames(styles.introduceContainer, {[styles.introduceContainerCenter]: !props.svgSrc})}
            >
                <div className={styles.fontTitleContainer}>
                    <p className={styles.titleTextCn}>{props.titleCn}</p>
                    <p className={styles.titleTextEn}>{props.titleEn}</p>
                </div>
                <div className={
                    classNames(
                        styles.contentText, 
                        {[styles.JSXcontentText]: typeof props.content != "string"}
                    )
                }>
                    {props.content}
                </div>
            </div>
            {props.svgSrc?
                <div className={classNames(styles.pictureContainer)}>
                    <div 
                        style={{backgroundImage: `url(${props.svgSrc})`}}
                        className={classNames(styles.backgroundImg)}
                    ></div>
                    <div className={classNames(styles.backgroundImgShadow)}></div>
                </div>
                :null
            }
        </div>
    )
}