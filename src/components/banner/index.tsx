import styles from "./banner.module.scss";
import classNames from "classnames";
import { Button } from "@douyinfe/semi-ui";
import { IconChevronRight } from "@douyinfe/semi-icons";

export default function Banner() {
	return (
		<div className={styles.bannerContainer}>
			<div className={styles.backgroundImg}></div>
			<div className={styles.bannerText}>
				<p className={styles.welcomeCnText}>欢迎</p>
				<p>华南师范大学图书馆</p>
				<Button
					className={styles.bannerButton}
					icon={<IconChevronRight />}
					iconPosition="right"
					theme="solid"
				>
					点击了解
				</Button>
			</div>
		</div>
	);
}
