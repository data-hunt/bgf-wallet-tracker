import React from "react";
import Head from "next/head";
import Header from "./Header";
import styles from "./Layout.module.css";
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";
import Container from "./Container";
import Spacer from "./Spacer";
import BasicTabs from "../Tabs/Tabs";

function Layout({ children }) {
	return (
		<div>
			<Head>
				<title>Next.js MongoDB App</title>
				<meta
					key='viewport'
					name='viewport'
					content='width=device-width, initial-scale=1, shrink-to-fit=no'
				/>
				<meta
					name='description'
					content='nextjs-mongodb-app is a continously developed app built with Next.JS and MongoDB. This project goes further and attempts to integrate top features as seen in real-life apps.'
				/>
				<meta property='og:title' content='Next.js + MongoDB App' />
				<meta
					property='og:description'
					content='nextjs-mongodb-app is a continously developed app built with Next.JS and MongoDB. This project goes further and attempts to integrate top features as seen in real-life apps.'
				/>
			</Head>
			<Navbar />
			<main className={styles.main}>
				<Header />
				<Spacer axis='vertical' size={1} />
				<BasicTabs />
			</main>
		</div>
	);
}

export default Layout;
