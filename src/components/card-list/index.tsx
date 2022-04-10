import { Card } from "@douyinfe/semi-ui";
import classNames from "classnames";
import styles from "./card-list.module.scss";
type CardListProps = {
    contentList: {name: string, imgElement: JSX.Element}[],
    showTips?: string
}
export default function CardList(props: CardListProps){

    return(
        <div className={classNames(styles.cardListContainer)}>
            {props.contentList.map((item)=>(
                <Card
                    style={{ width: 200, marginRight: 40, border: "3px solid black", boxSizing: "content-box"}}
                    cover={item.imgElement}
                    key={item.name}
                >
                    <Card.Meta
                        title={item.name}
                    />
                </Card>
            ))}
            <div className={classNames(styles.showMore)}>{props.showTips}</div>
        </div>
    )
}