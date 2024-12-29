import React from "react"
import { observer } from "mobx-react-lite";
import Header from './../header/Header';
import Navbar from './../navbar/Navbar';
import headerModalStore from "../../stores/headerModalStore";
import styles from './Layout.module.scss';

const Layout = observer(({ children }) => {
	return (
		<div>
			<Header />
				<main className={
					headerModalStore.modal 
					? `${styles.main} ${styles.hide}` 
					: styles.main
				}>
					{children}
				</main>
			<Navbar />
		</div>
	)
});

export default Layout;
