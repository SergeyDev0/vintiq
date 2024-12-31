import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Layout from "../../components/layout/Layout";
import gucci from "../../assets/gucci.svg";
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
      <div className={styles.partners}>
        <Swiper
          navigation
          slidesPerView={4}
          spaceBetween={120}
          modules={[Navigation]}
          className={styles.partnersSwiper}
        >
          <SwiperSlide>
            <img src={gucci} alt={"title"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={gucci} alt={"title"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={gucci} alt={"title"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={gucci} alt={"title"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={gucci} alt={"title"} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={gucci} alt={"title"} />
          </SwiperSlide>
        </Swiper>
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
                  <svg
                    width="35"
                    height="34"
                    viewBox="0 0 35 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7898 9.01648L17.585 10.0594L18.3802 9.01648C19.7713 7.192 22.0059 6 24.5047 6C28.7503 6 32.17 9.38848 32.17 13.5483C32.17 15.2572 31.8923 16.8337 31.4099 18.2969L31.4099 18.2969L31.4077 18.3035C30.2504 21.8972 27.8746 24.8042 25.2958 26.9788C22.7133 29.1565 19.9872 30.5487 18.2346 31.1338L18.2346 31.1338L18.224 31.1374C18.0974 31.1813 17.8657 31.22 17.585 31.22C17.3043 31.22 17.0726 31.1813 16.946 31.1374L16.946 31.1374L16.9354 31.1338C15.1828 30.5487 12.4567 29.1565 9.87415 26.9788C7.29542 24.8042 4.91965 21.8972 3.76228 18.3035L3.7623 18.3034L3.76013 18.2969C3.27769 16.8337 3 15.2572 3 13.5483C3 9.38848 6.41969 6 10.6653 6C13.1641 6 15.3987 7.192 16.7898 9.01648Z"
                      fill="#292526"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                <img className={styles.cardImg} src={TShirt} alt={"title"} />
                <h4 className={styles.cardBrand}>Бренд</h4>
                <h5 className={styles.cardTitle}>Название</h5>
                <span className={styles.cardPrice}>120₽</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" className={styles.card}>
                <button className={styles.new}>
                  <span>new</span>
                </button>
                <button className={styles.favorite}>
                  <svg
                    width="35"
                    height="34"
                    viewBox="0 0 35 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7898 9.01648L17.585 10.0594L18.3802 9.01648C19.7713 7.192 22.0059 6 24.5047 6C28.7503 6 32.17 9.38848 32.17 13.5483C32.17 15.2572 31.8923 16.8337 31.4099 18.2969L31.4099 18.2969L31.4077 18.3035C30.2504 21.8972 27.8746 24.8042 25.2958 26.9788C22.7133 29.1565 19.9872 30.5487 18.2346 31.1338L18.2346 31.1338L18.224 31.1374C18.0974 31.1813 17.8657 31.22 17.585 31.22C17.3043 31.22 17.0726 31.1813 16.946 31.1374L16.946 31.1374L16.9354 31.1338C15.1828 30.5487 12.4567 29.1565 9.87415 26.9788C7.29542 24.8042 4.91965 21.8972 3.76228 18.3035L3.7623 18.3034L3.76013 18.2969C3.27769 16.8337 3 15.2572 3 13.5483C3 9.38848 6.41969 6 10.6653 6C13.1641 6 15.3987 7.192 16.7898 9.01648Z"
                      fill="#292526"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                <img className={styles.cardImg} src={TShirt} alt={"title"} />
                <h4 className={styles.cardBrand}>Бренд</h4>
                <h5 className={styles.cardTitle}>Название</h5>
                <span className={styles.cardPrice}>120₽</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" className={styles.card}>
                <button className={styles.new}>
                  <span>new</span>
                </button>
                <button className={styles.favorite}>
                  <svg
                    width="35"
                    height="34"
                    viewBox="0 0 35 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7898 9.01648L17.585 10.0594L18.3802 9.01648C19.7713 7.192 22.0059 6 24.5047 6C28.7503 6 32.17 9.38848 32.17 13.5483C32.17 15.2572 31.8923 16.8337 31.4099 18.2969L31.4099 18.2969L31.4077 18.3035C30.2504 21.8972 27.8746 24.8042 25.2958 26.9788C22.7133 29.1565 19.9872 30.5487 18.2346 31.1338L18.2346 31.1338L18.224 31.1374C18.0974 31.1813 17.8657 31.22 17.585 31.22C17.3043 31.22 17.0726 31.1813 16.946 31.1374L16.946 31.1374L16.9354 31.1338C15.1828 30.5487 12.4567 29.1565 9.87415 26.9788C7.29542 24.8042 4.91965 21.8972 3.76228 18.3035L3.7623 18.3034L3.76013 18.2969C3.27769 16.8337 3 15.2572 3 13.5483C3 9.38848 6.41969 6 10.6653 6C13.1641 6 15.3987 7.192 16.7898 9.01648Z"
                      fill="#292526"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                <img className={styles.cardImg} src={TShirt} alt={"title"} />
                <h4 className={styles.cardBrand}>Бренд</h4>
                <h5 className={styles.cardTitle}>Название</h5>
                <span className={styles.cardPrice}>120₽</span>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/" className={styles.card}>
                <button className={styles.new}>
                  <span>new</span>
                </button>
                <button className={styles.favorite}>
                  <svg
                    width="35"
                    height="34"
                    viewBox="0 0 35 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7898 9.01648L17.585 10.0594L18.3802 9.01648C19.7713 7.192 22.0059 6 24.5047 6C28.7503 6 32.17 9.38848 32.17 13.5483C32.17 15.2572 31.8923 16.8337 31.4099 18.2969L31.4099 18.2969L31.4077 18.3035C30.2504 21.8972 27.8746 24.8042 25.2958 26.9788C22.7133 29.1565 19.9872 30.5487 18.2346 31.1338L18.2346 31.1338L18.224 31.1374C18.0974 31.1813 17.8657 31.22 17.585 31.22C17.3043 31.22 17.0726 31.1813 16.946 31.1374L16.946 31.1374L16.9354 31.1338C15.1828 30.5487 12.4567 29.1565 9.87415 26.9788C7.29542 24.8042 4.91965 21.8972 3.76228 18.3035L3.7623 18.3034L3.76013 18.2969C3.27769 16.8337 3 15.2572 3 13.5483C3 9.38848 6.41969 6 10.6653 6C13.1641 6 15.3987 7.192 16.7898 9.01648Z"
                      fill="#292526"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
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
        <div className={styles.popularSection}>
          <Link to="/" className={styles.card}>
            <button className={styles.favorite}>
              <svg
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7898 9.01648L17.585 10.0594L18.3802 9.01648C19.7713 7.192 22.0059 6 24.5047 6C28.7503 6 32.17 9.38848 32.17 13.5483C32.17 15.2572 31.8923 16.8337 31.4099 18.2969L31.4099 18.2969L31.4077 18.3035C30.2504 21.8972 27.8746 24.8042 25.2958 26.9788C22.7133 29.1565 19.9872 30.5487 18.2346 31.1338L18.2346 31.1338L18.224 31.1374C18.0974 31.1813 17.8657 31.22 17.585 31.22C17.3043 31.22 17.0726 31.1813 16.946 31.1374L16.946 31.1374L16.9354 31.1338C15.1828 30.5487 12.4567 29.1565 9.87415 26.9788C7.29542 24.8042 4.91965 21.8972 3.76228 18.3035L3.7623 18.3034L3.76013 18.2969C3.27769 16.8337 3 15.2572 3 13.5483C3 9.38848 6.41969 6 10.6653 6C13.1641 6 15.3987 7.192 16.7898 9.01648Z"
                  fill="#292526"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <img className={styles.cardImg} src={TShirt} alt={"title"} />
            <h4 className={styles.cardBrand}>Бренд</h4>
            <h5 className={styles.cardTitle}>Название</h5>
            <span className={styles.cardPrice}>120₽</span>
          </Link>
          <Link to="/" className={styles.card}>
            <button className={styles.favorite}>
              <svg
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7898 9.01648L17.585 10.0594L18.3802 9.01648C19.7713 7.192 22.0059 6 24.5047 6C28.7503 6 32.17 9.38848 32.17 13.5483C32.17 15.2572 31.8923 16.8337 31.4099 18.2969L31.4099 18.2969L31.4077 18.3035C30.2504 21.8972 27.8746 24.8042 25.2958 26.9788C22.7133 29.1565 19.9872 30.5487 18.2346 31.1338L18.2346 31.1338L18.224 31.1374C18.0974 31.1813 17.8657 31.22 17.585 31.22C17.3043 31.22 17.0726 31.1813 16.946 31.1374L16.946 31.1374L16.9354 31.1338C15.1828 30.5487 12.4567 29.1565 9.87415 26.9788C7.29542 24.8042 4.91965 21.8972 3.76228 18.3035L3.7623 18.3034L3.76013 18.2969C3.27769 16.8337 3 15.2572 3 13.5483C3 9.38848 6.41969 6 10.6653 6C13.1641 6 15.3987 7.192 16.7898 9.01648Z"
                  fill="#292526"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <img className={styles.cardImg} src={TShirt} alt={"title"} />
            <h4 className={styles.cardBrand}>Бренд</h4>
            <h5 className={styles.cardTitle}>Название</h5>
            <span className={styles.cardPrice}>120₽</span>
          </Link>
          <Link to="/" className={styles.card}>
            <button className={styles.favorite}>
              <svg
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7898 9.01648L17.585 10.0594L18.3802 9.01648C19.7713 7.192 22.0059 6 24.5047 6C28.7503 6 32.17 9.38848 32.17 13.5483C32.17 15.2572 31.8923 16.8337 31.4099 18.2969L31.4099 18.2969L31.4077 18.3035C30.2504 21.8972 27.8746 24.8042 25.2958 26.9788C22.7133 29.1565 19.9872 30.5487 18.2346 31.1338L18.2346 31.1338L18.224 31.1374C18.0974 31.1813 17.8657 31.22 17.585 31.22C17.3043 31.22 17.0726 31.1813 16.946 31.1374L16.946 31.1374L16.9354 31.1338C15.1828 30.5487 12.4567 29.1565 9.87415 26.9788C7.29542 24.8042 4.91965 21.8972 3.76228 18.3035L3.7623 18.3034L3.76013 18.2969C3.27769 16.8337 3 15.2572 3 13.5483C3 9.38848 6.41969 6 10.6653 6C13.1641 6 15.3987 7.192 16.7898 9.01648Z"
                  fill="#292526"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <img className={styles.cardImg} src={TShirt} alt={"title"} />
            <h4 className={styles.cardBrand}>Бренд</h4>
            <h5 className={styles.cardTitle}>Название</h5>
            <span className={styles.cardPrice}>120₽</span>
          </Link>
          <Link to="/" className={styles.card}>
            <button className={styles.favorite}>
              <svg
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7898 9.01648L17.585 10.0594L18.3802 9.01648C19.7713 7.192 22.0059 6 24.5047 6C28.7503 6 32.17 9.38848 32.17 13.5483C32.17 15.2572 31.8923 16.8337 31.4099 18.2969L31.4099 18.2969L31.4077 18.3035C30.2504 21.8972 27.8746 24.8042 25.2958 26.9788C22.7133 29.1565 19.9872 30.5487 18.2346 31.1338L18.2346 31.1338L18.224 31.1374C18.0974 31.1813 17.8657 31.22 17.585 31.22C17.3043 31.22 17.0726 31.1813 16.946 31.1374L16.946 31.1374L16.9354 31.1338C15.1828 30.5487 12.4567 29.1565 9.87415 26.9788C7.29542 24.8042 4.91965 21.8972 3.76228 18.3035L3.7623 18.3034L3.76013 18.2969C3.27769 16.8337 3 15.2572 3 13.5483C3 9.38848 6.41969 6 10.6653 6C13.1641 6 15.3987 7.192 16.7898 9.01648Z"
                  fill="#292526"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <img className={styles.cardImg} src={TShirt} alt={"title"} />
            <h4 className={styles.cardBrand}>Бренд</h4>
            <h5 className={styles.cardTitle}>Название</h5>
            <span className={styles.cardPrice}>120₽</span>
          </Link>
        </div>
        <div className={styles.popularLargeSection}>
          <img className={styles.img} src={TShirt} alt={"title"} />
          <img className={styles.largeImg} src="" alt={"title"} />
        </div>
        <div className={styles.popularHeader}>
          <h3>Одежда</h3>
          <Link to="/">Смотреть все</Link>
        </div>
        <div className={styles.popularSection}>
          <Link to="/" className={styles.card}>
            <button className={styles.favorite}>
              <svg
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7898 9.01648L17.585 10.0594L18.3802 9.01648C19.7713 7.192 22.0059 6 24.5047 6C28.7503 6 32.17 9.38848 32.17 13.5483C32.17 15.2572 31.8923 16.8337 31.4099 18.2969L31.4099 18.2969L31.4077 18.3035C30.2504 21.8972 27.8746 24.8042 25.2958 26.9788C22.7133 29.1565 19.9872 30.5487 18.2346 31.1338L18.2346 31.1338L18.224 31.1374C18.0974 31.1813 17.8657 31.22 17.585 31.22C17.3043 31.22 17.0726 31.1813 16.946 31.1374L16.946 31.1374L16.9354 31.1338C15.1828 30.5487 12.4567 29.1565 9.87415 26.9788C7.29542 24.8042 4.91965 21.8972 3.76228 18.3035L3.7623 18.3034L3.76013 18.2969C3.27769 16.8337 3 15.2572 3 13.5483C3 9.38848 6.41969 6 10.6653 6C13.1641 6 15.3987 7.192 16.7898 9.01648Z"
                  fill="#292526"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <img className={styles.cardImg} src={TShirt} alt={"title"} />
            <h4 className={styles.cardBrand}>Бренд</h4>
            <h5 className={styles.cardTitle}>Название</h5>
            <span className={styles.cardPrice}>120₽</span>
          </Link>
          <Link to="/" className={styles.card}>
            <button className={styles.favorite}>
              <svg
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7898 9.01648L17.585 10.0594L18.3802 9.01648C19.7713 7.192 22.0059 6 24.5047 6C28.7503 6 32.17 9.38848 32.17 13.5483C32.17 15.2572 31.8923 16.8337 31.4099 18.2969L31.4099 18.2969L31.4077 18.3035C30.2504 21.8972 27.8746 24.8042 25.2958 26.9788C22.7133 29.1565 19.9872 30.5487 18.2346 31.1338L18.2346 31.1338L18.224 31.1374C18.0974 31.1813 17.8657 31.22 17.585 31.22C17.3043 31.22 17.0726 31.1813 16.946 31.1374L16.946 31.1374L16.9354 31.1338C15.1828 30.5487 12.4567 29.1565 9.87415 26.9788C7.29542 24.8042 4.91965 21.8972 3.76228 18.3035L3.7623 18.3034L3.76013 18.2969C3.27769 16.8337 3 15.2572 3 13.5483C3 9.38848 6.41969 6 10.6653 6C13.1641 6 15.3987 7.192 16.7898 9.01648Z"
                  fill="#292526"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <img className={styles.cardImg} src={TShirt} alt={"title"} />
            <h4 className={styles.cardBrand}>Бренд</h4>
            <h5 className={styles.cardTitle}>Название</h5>
            <span className={styles.cardPrice}>120₽</span>
          </Link>
          <Link to="/" className={styles.card}>
            <button className={styles.favorite}>
              <svg
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7898 9.01648L17.585 10.0594L18.3802 9.01648C19.7713 7.192 22.0059 6 24.5047 6C28.7503 6 32.17 9.38848 32.17 13.5483C32.17 15.2572 31.8923 16.8337 31.4099 18.2969L31.4099 18.2969L31.4077 18.3035C30.2504 21.8972 27.8746 24.8042 25.2958 26.9788C22.7133 29.1565 19.9872 30.5487 18.2346 31.1338L18.2346 31.1338L18.224 31.1374C18.0974 31.1813 17.8657 31.22 17.585 31.22C17.3043 31.22 17.0726 31.1813 16.946 31.1374L16.946 31.1374L16.9354 31.1338C15.1828 30.5487 12.4567 29.1565 9.87415 26.9788C7.29542 24.8042 4.91965 21.8972 3.76228 18.3035L3.7623 18.3034L3.76013 18.2969C3.27769 16.8337 3 15.2572 3 13.5483C3 9.38848 6.41969 6 10.6653 6C13.1641 6 15.3987 7.192 16.7898 9.01648Z"
                  fill="#292526"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <img className={styles.cardImg} src={TShirt} alt={"title"} />
            <h4 className={styles.cardBrand}>Бренд</h4>
            <h5 className={styles.cardTitle}>Название</h5>
            <span className={styles.cardPrice}>120₽</span>
          </Link>
          <Link to="/" className={styles.card}>
            <button className={styles.favorite}>
              <svg
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7898 9.01648L17.585 10.0594L18.3802 9.01648C19.7713 7.192 22.0059 6 24.5047 6C28.7503 6 32.17 9.38848 32.17 13.5483C32.17 15.2572 31.8923 16.8337 31.4099 18.2969L31.4099 18.2969L31.4077 18.3035C30.2504 21.8972 27.8746 24.8042 25.2958 26.9788C22.7133 29.1565 19.9872 30.5487 18.2346 31.1338L18.2346 31.1338L18.224 31.1374C18.0974 31.1813 17.8657 31.22 17.585 31.22C17.3043 31.22 17.0726 31.1813 16.946 31.1374L16.946 31.1374L16.9354 31.1338C15.1828 30.5487 12.4567 29.1565 9.87415 26.9788C7.29542 24.8042 4.91965 21.8972 3.76228 18.3035L3.7623 18.3034L3.76013 18.2969C3.27769 16.8337 3 15.2572 3 13.5483C3 9.38848 6.41969 6 10.6653 6C13.1641 6 15.3987 7.192 16.7898 9.01648Z"
                  fill="#292526"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <img className={styles.cardImg} src={TShirt} alt={"title"} />
            <h4 className={styles.cardBrand}>Бренд</h4>
            <h5 className={styles.cardTitle}>Название</h5>
            <span className={styles.cardPrice}>120₽</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
