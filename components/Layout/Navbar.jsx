import React from "react";
import styles from "./Navbar.module.css";
import Wrapper from "./Wrapper";
import Container from "./Container";
import Spacer from "./Spacer";

function Navbar() {
	return (
		<div className={styles.navbar}>
			<Wrapper className={styles.wrapper}>
				<Container
					className={styles.content}
					alignItems='center'
					justifyContent='space-between'
				>
					{/* Left Side */}
					<div>
						<span>LOGO</span>
					</div>
					{/* Right Side */}
					<Container>
						<div>
							<span>Log in</span>
						</div>
						<Spacer axis='horizontal' size={0.25} />
						<div>
							<span>Sign Up</span>
						</div>
					</Container>
				</Container>
			</Wrapper>
		</div>
	);
}

export default Navbar;
