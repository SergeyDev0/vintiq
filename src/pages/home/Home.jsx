import React from "react";
import Layout from "../../components/layout/Layout";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div className={styles.banner}>
        <Link to="/">В каталог</Link>
      </div>
      <div className={styles.newCollection}>
        <h2 className={styles.newCollectionTitle}>Новая коллекция</h2>
        <div className={styles.newCollectionBtn}>
          <Link to="/">Смотреть все</Link>
        </div>
      </div>
			<div className={styles.popular}>
				<h2 className={styles.popularTitle}>Популярное</h2>
				<div className={styles.popularHeader}>
					<h3>Аксессуары</h3>
					<Link to="/">Смотреть все</Link>
				</div>

				<div className={styles.popularHeader}>
					<h3>Одежда</h3>
					<Link to="/">Смотреть все</Link>
				</div>
			</div>
    </Layout>
  );
};

export default Home;
