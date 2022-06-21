import React from "react";
import styles from "./Tabs.module.css";
import Link from "next/link";
import { withRouter } from "next/router";
import Wrapper from "../Layout/Wrapper";
import Container from "../Layout/Container";

function Tabs({ router }) {
	const {
		query: { tab },
	} = router;

	const isTabOne = tab === "1" || tab == null;
	const isTabTwo = tab === "2";

	return (
		<div className={styles.tabContainer}>
			<Wrapper className={styles.wrapper}>
				<Container
					className={styles.content}
					alignItems='center'
					justifyContent='space-between'
				>
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
					</div>

					<div className={styles.tabBody}>
						{isTabOne && <>Tab one content</>}
						{isTabTwo && <>Tab two content</>}
					</div>
				</Container>
			</Wrapper>
		</div>
	);
}

export default withRouter(Tabs);
