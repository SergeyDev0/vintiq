import React from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import headerModalStore from "../../stores/headerModalStore";
import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import styles from "./Header.module.scss";

const Header = () => {
  const [activeLink, setActiveLink] = React.useState(1);
  const [auth, setAuth] = React.useState(true);
  const [modal, setModal] = React.useState(false);
  return (
    <header 
			className={styles.header}
			onMouseLeave={() => {
				setModal(false);
				headerModalStore.setModal(false);
			}}
		>
      <div className={styles.headerTop}>
        <nav className={styles.headerNav}>
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
        </nav>
        <Link to="/" className={styles.headerLogo}>
          <img src={logo} alt="Logo" />
        </Link>
        <nav className={styles.userNav}>
          <ul>
            <li>
              <Link to="/"><img src={user} alt="profile" /></Link>
            </li>
            <li>
              <Link to="/"><img src={heart} alt="favorite" /></Link>
            </li>
            <li>
              <Link to="/"><img src={cart} alt="cart" /></Link>
            </li>
          </ul>
        </nav>
      </div>
      {auth && (
        <>
        	<div className={styles.headerBottom}>
	          <ul>
	            <li
								className={modal ? `${styles.active}` : null}
								onClick={() => {
									setModal(!modal);
									headerModalStore.toggleModal();
         
								}}
								onMouseEnter={() => {
									setModal(true);
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
	            <li>
	              <Link className={styles.sale} to="/">
	                Sale%
	              </Link>
	            </li>
	          </ul>
	          <div className={styles.headerSearch}>
	            <input type="text" placeholder="Поиск" />
	          </div>
	        </div>
					{modal && (
						<div className={styles.modal}>
							<ul className={styles.modalLinkList}>
								<li>
									<Link className={styles.modalLinkItem} to="/">Доставка</Link>
								</li>
								<li>
									<Link className={styles.modalLinkItem} to="/">Возврат</Link>
								</li>
								<li>
									<Link className={styles.modalLinkItem} to="/">Оплата</Link>
								</li>
								<li>
									<Link className={styles.modalLinkItem} to="/">Помощь покупателю</Link>
								</li>
							</ul>
						</div>
					)}
        </>
      )}
    </header>
  );
};

export default Header;
