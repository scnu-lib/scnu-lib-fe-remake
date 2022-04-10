import Navigation from "../components/nav";
import styles from "./layouts.module.scss";
import bookLogo from '../source/bookLogo.svg';

export default function Layouts(props: {children: JSX.Element}){

    return (
        <div className={styles.windowContainer}>
            <Navigation
                indexNav={{imgSrc: <img src={bookLogo} alt="index" />, title: "阅马平台", path: "/"}}
                itemPath={[
                    { title: "活动详情", path: "/activities" }
                ]}
            ></Navigation>
            <div className={styles.showPageContainer}>
                {props.children}
            </div>
        </div>
    )
}