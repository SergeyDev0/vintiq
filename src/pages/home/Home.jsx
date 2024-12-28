import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Layout from "../../components/layout/Layout";
import whiteHeart from "../../assets/white-heart.svg";
import TShirt from "../../assets/t-shirt.jpg";
import styles from "./Home.module.scss";
import "swiper/css/navigation";
import "swiper/css";

const Home = () => {
  return (
    <Layout>
      <div className={styles.banner}>
        <Link to="/">В каталог</Link>
      </div>
      <div className={styles.newCollection}>
        <h2 className={styles.newCollectionTitle}>Новая коллекция</h2>
        <div className={styles.newCollectionSwiperWrapper}>
        	<Swiper
						navigation
	          spaceBetween={80}
	          slidesPerView={3}
						modules={[Navigation]}
	          className={styles.newCollectionSwiper}
	        >
	          <SwiperSlide>
	            <Link to="/" className={styles.card}>
	              <button className={styles.new}>
	                <span>new</span>
	              </button>
	              <button className={styles.favorite}>
	                <img src={whiteHeart} alt="favorite" />
	              </button>
	              <img className={styles.cardImg} src={TShirt} alt={"title"} />
	              <h4 className={styles.cardBrand}>Бренд</h4>
	              <h5 className={styles.cardTitle}>Название</h5>
	              <span className={styles.cardPrice}>120₽</span>
	            </Link>
	          </SwiperSlide>
	          <SwiperSlide>
	            <Link to="/" className={styles.card}>
	              <button className={styles.new}>new</button>
	              <button className={styles.favorite}>
	                <img src={whiteHeart} alt="favorite" />
	              </button>
	              <img className={styles.cardImg} src={TShirt} alt={"title"} />
	              <h4 className={styles.cardBrand}>Бренд</h4>
	              <h5 className={styles.cardTitle}>Название</h5>
	              <span className={styles.cardPrice}>120₽</span>
	            </Link>
	          </SwiperSlide>
	          <SwiperSlide>
	            <Link to="/" className={styles.card}>
	              <button className={styles.new}>new</button>
	              <button className={styles.favorite}>
	                <img src={whiteHeart} alt="favorite" />
	              </button>
	              <img className={styles.cardImg} src={TShirt} alt={"title"} />
	              <h4 className={styles.cardBrand}>Бренд</h4>
	              <h5 className={styles.cardTitle}>Название</h5>
	              <span className={styles.cardPrice}>120₽</span>
	            </Link>
	          </SwiperSlide>
	          <SwiperSlide>
	            <Link to="/" className={styles.card}>
	              <button className={styles.new}>new</button>
	              <button className={styles.favorite}>
	                <img src={whiteHeart} alt="favorite" />
	              </button>
	              <img className={styles.cardImg} src={TShirt} alt={"title"} />
	              <h4 className={styles.cardBrand}>Бренд</h4>
	              <h5 className={styles.cardTitle}>Название</h5>
	              <span className={styles.cardPrice}>120₽</span>
	            </Link>
	          </SwiperSlide>
	        </Swiper>
        </div>
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
