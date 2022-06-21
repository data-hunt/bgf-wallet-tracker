import { style } from "@mui/system";
import React from "react";
import styles from "./Tabs.module.css";
import Link from "next/link";
import Router from "next/router";

function Tabs() {
	const {
		query: { tab },
	} = Router;

	const isTabOne = tab === "1" || tab == null;
	const isTabTwo = tab === "2";

	return (
		<div className={styles.tabContainer}>
			<div className={styles.tabHead}>
				<div className={styles.tab}>
					<Link href={{ pathname: "/", query: { tab: "1" } }}>
						<a>Dashboard</a>
					</Link>
				</div>
				<div className={styles.tab}>
					<Link href={{ pathname: "/", query: { tab: "2" } }}>
						<a>Transactions</a>
					</Link>
				</div>
				<div className={styles.tabBody}>
					{isTabOne && <>Tab one content</>}
					{isTabTwo && <>Tab two content</>}
				</div>
			</div>
		</div>
	);
}

export default Tabs;
