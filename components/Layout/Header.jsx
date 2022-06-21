import styles from "./Header.module.css";
import Wrapper from "./Wrapper";
import Container from "./Container";
import Spacer from "./Spacer";

function Header() {
	return (
		<div className={styles.header}>
			<Wrapper className={styles.wrapper}>
				<Container
					className={styles.content}
					alginItems='center'
					justifyContent='space-between'
				>
					{/* Left Side */}
					<div>
						<h2>NFT Dashboard</h2>
					</div>
					{/* Right Side */}
					<div>Search </div>
				</Container>
			</Wrapper>
		</div>
	);
}

export default Header;
