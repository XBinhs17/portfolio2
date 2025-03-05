import classNames from "classnames/bind";

import styles from "./Home.module.scss";

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
                
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
