import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHouse, faPhone, faSchool } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles);

function Home() {
  return (
    <main className={cx("wrapper")}>
      <section className={cx("section__about")}>
        <div className={cx("section__about-avatar")}>
          <img
            src="https://res.cloudinary.com/dlteq4ism/image/upload/v1741162882/avt_dqsrbq.png"
            alt="avatar"
          />
        </div>

        <div className={cx("section__about-info")}>
          <div className={cx("about__info-title")}>
            <h1>Hi, I'm Xuan Binh</h1>
            <h2>Frontend Developer Based In Ho Chi Minh City</h2>
          </div>
          <div className={cx("about__info-content")}>
            <div className={cx("info__content-card")}>
                <h2><FontAwesomeIcon icon={faSchool}/> EDUCATION</h2>
                <p className={cx("school__name")}>HCMC UNIVERSITY OF INDUSTRY AND TRADE</p>
                <p>Major: Software Engineering (2021 - 2025)</p>
                <p>Bachelor of Information Technology.</p>
                <p>GPA: 3.08/4.0</p>
            </div>
            <div className={cx("info__content-card")}>
                <h2><FontAwesomeIcon icon={faAddressCard}/> CONTACT</h2>
                <p><FontAwesomeIcon icon={faPhone}/> +84 337 467 283</p>
                <p><FontAwesomeIcon icon={faEnvelope}/> nguyenbinh17062003@gmail.com</p>
                <p><FontAwesomeIcon icon={faHouse}/> Binh Tan District, Ho Chi Minh City</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
