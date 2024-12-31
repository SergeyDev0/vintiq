import React from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import headerModalStore from "../../stores/headerModalStore";
import HeaderModal from "./HeaderModal/HeaderModal";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import styles from "./Header.module.scss";

const Header = () => {
  const [activeLink, setActiveLink] = React.useState(1);
  const [auth, setAuth] = React.useState(true);
  const [modal, setModal] = React.useState("");
  return (
    <header
      className={styles.header}
      onMouseLeave={() => {
        setModal("");
        headerModalStore.setModal(false);
      }}
    >
      <div className={styles.headerTop}>
        <nav className={styles.headerNav}>
          {modal !== "search" && (
            <ul>
              <li>
                <Link
                  onClick={() => setActiveLink(1)}
                  className={activeLink === 1 ? `${styles.active}` : null}
                  to="/"
                >
                  Женское
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setActiveLink(2)}
                  className={activeLink === 2 ? `${styles.active}` : null}
                  to="/"
                >
                  Мужское
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setActiveLink(3)}
                  className={activeLink === 3 ? `${styles.active}` : null}
                  to="/"
                >
                  Детское
                </Link>
              </li>
            </ul>
          )}
        </nav>
        <Link
          to="/"
          onClick={() => {
            setModal("");
            headerModalStore.setModal(false);
          }}
          className={styles.headerLogo}
        >
          <img src={logo} alt="Logo" />
        </Link>
        {modal !== "search" && (
          <nav className={styles.userNav}>
            <ul>
              <li>
                <Link to="/">
                  <img src={user} alt="profile" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={heart} alt="favorite" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src={cart} alt="cart" />
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
      {auth && (
        <>
          {modal !== "search" && (
            <div className={styles.headerBottom}>
              <ul>
                <li
                  className={modal === "about" ? `${styles.active}` : null}
                  onClick={() => {
                    setModal(modal ? "" : "about");
                    headerModalStore.toggleModal();
                  }}
                  onMouseEnter={() => {
                    setModal("about");
                    headerModalStore.setModal(true);
                  }}
                >
                  О нас
                </li>
                <li>
                  <Link to="/">Новинки</Link>
                </li>
                <li>
                  <Link to="/">Аксессуары</Link>
                </li>
                <li>
                  <Link to="/">Одежда</Link>
                </li>
                <li>
                  <Link to="/">Обувь</Link>
                </li>
                <li>
                  <Link to="/">Бренды</Link>
                </li>
                <li className={styles.sale}>
                  <Link to="/">
                    Sale%
                  </Link>
                </li>
              </ul>
              <button
                className={styles.headerSearch}
                onClick={() => {
                  setModal("search");
                  headerModalStore.toggleModal();
                }}
              >
                Поиск
              </button>
            </div>
          )}
          {modal && <HeaderModal name={modal} />}
        </>
      )}
    </header>
  );
};

export default Header;
