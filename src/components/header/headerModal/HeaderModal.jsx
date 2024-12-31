import React from "react";
import { Link } from "react-router-dom";
import closeIcon from "../../../assets/close.svg";
import TShirt from "../../../assets/t-shirt.jpg";
import styles from "../Header.module.scss";

const AboutModal = ({ name }) => {
	const [activeLink, setActiveLink] = React.useState(1);

  if (name === "about") {
    return (
      <div className={styles.modal}>
        <ul className={styles.modalLinkList}>
          <li>
            <Link className={styles.modalLinkItem} to="/">
              Доставка
            </Link>
          </li>
          <li>
            <Link className={styles.modalLinkItem} to="/">
              Возврат
            </Link>
          </li>
          <li>
            <Link className={styles.modalLinkItem} to="/">
              Оплата
            </Link>
          </li>
          <li>
            <Link className={styles.modalLinkItem} to="/">
              Помощь покупателю
            </Link>
          </li>
        </ul>
      </div>
    );
  } else if (name === "search") {
    return (
      <div className={styles.modal}>
        <div className={styles.modalInputWrapper}>
          <input
            autoFocus
            className={styles.modalInput}
            type="text"
            placeholder="Поиск"
          />
        </div>
        <div className={styles.modalSearchBtns}>
          <ul>
            <li className={activeLink === 1 ? `${styles.active}` : null}>
              <button onClick={() => setActiveLink(1)}>
                Женское
              </button>
            </li>
            <li className={activeLink === 2 ? `${styles.active}` : null}>
              <button onClick={() => setActiveLink(2)}>
                Мужское
              </button>
            </li>
            <li className={activeLink === 3 ? `${styles.active}` : null}>
              <button onClick={() => setActiveLink(3)}>
                Детское
              </button>
            </li>
          </ul>
        </div>
        <div className={styles.modalSearchWrapper}>
          <div className={styles.modalHistory}>
						<h2 className={styles.modalSearchTitle}>История</h2>
						<ul>
							<li>
								<Link to="/">Куртка зимняя</Link>
								<button>
									<img src={closeIcon} />
								</button>
							</li>
							<li>
								<Link to="/">Куртка зимняя</Link>
								<button>
									<img src={closeIcon} />
								</button>
							</li>
							<li>
								<Link to="/">Куртка зимняя</Link>
								<button>
									<img src={closeIcon} />
								</button>
							</li>
							<li>
								<Link to="/">Куртка зимняя</Link>
								<button>
									<img src={closeIcon} />
								</button>
							</li>
						</ul>
					</div>
          <div className={styles.modalRecommendation}>
						<h2 className={styles.modalSearchTitle}>Рекомендуем вам</h2>
						<div className={styles.wrapper}>
							<Link to="/" className={styles.card}>
								<img className={styles.img} src={TShirt} alt={"title"} />
								<h3 className={styles.title}>Часы</h3>
								<h4 className={styles.description}>Описание</h4>
								<span className={styles.price}>120$</span>
							</Link>
							<Link to="/" className={styles.card}>
								<img className={styles.img} src={TShirt} alt={"title"} />
								<h3 className={styles.title}>Часы</h3>
								<h4 className={styles.description}>Описание</h4>
								<span className={styles.price}>120$</span>
							</Link>
						</div>
					</div>
        </div>
      </div>
    );
  }
};

export default AboutModal;
