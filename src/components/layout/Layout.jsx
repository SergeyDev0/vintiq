import React from "react"
import Header from './../header/Header';
import Navbar from './../navbar/Navbar';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
				<main className={styles.main}>
					{children}
				</main>
			<Navbar />
		</>
	)
};

export default Layout;
