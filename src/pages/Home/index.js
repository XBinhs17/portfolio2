import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
  faPhone,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);
const skills = [
  {
    category: "Frontend Development",
    items: [
      {
        name: "HTML",
        level: "Intermediate",
        img: "https://res.cloudinary.com/dlteq4ism/image/upload/v1741265738/html_s6h5m7.png",
      },
      {
        name: "CSS",
        level: "Advanced",
        img: "https://res.cloudinary.com/dlteq4ism/image/upload/v1741265738/CSS_pbpd3o.png",
      },
      {
        name: "JavaScript",
        level: "Basic",
        img: "https://res.cloudinary.com/dlteq4ism/image/upload/v1741265738/js_e7emby.png",
      },
      {
        name: "ReactJS",
        level: "Basic",
        img: "https://res.cloudinary.com/dlteq4ism/image/upload/v1741265738/ReactJs_yvnmau.png",
      },
    ],
  },
  {
    category: "Backend Development",
    items: [
      {
        name: "PHP",
        level: "Basic",
        img: "https://res.cloudinary.com/dlteq4ism/image/upload/v1741265999/PHPlogo_ez5cxh.webp",
      },
      {
        name: "NodeJs",
        level: "Basic",
        img: "https://res.cloudinary.com/dlteq4ism/image/upload/v1741267504/Node.js_logo.svg_jvrxvg.png",
      },
      {
        name: "C#",
        level: "Basic",
        img: "https://res.cloudinary.com/dlteq4ism/image/upload/v1741265999/C_xm7cne.png",
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "SQL Server",
        level: "Basic",
        img: "https://res.cloudinary.com/dlteq4ism/image/upload/v1741266000/SQLSV_sytfsn.jpg",
      },
      {
        name: "MySQL",
        level: "Basic",
        img: "https://res.cloudinary.com/dlteq4ism/image/upload/v1741265999/MySQL_uzhuhx.png",
      },
      {
        name: "MongoDB",
        level: "Basic",
        img: "https://res.cloudinary.com/dlteq4ism/image/upload/v1741267888/mongodb_m1ejzh.svg",
      },
    ],
  },
  {
    category: "Designer",
    items: [
      {
        name: "Photoshop",
        level: "Basic",
        img: "https://res.cloudinary.com/dlteq4ism/image/upload/v1741265738/photoshop_jeagdc.png",
      },
      {
        name: "Figma",
        level: "Basic",
        img: "https://res.cloudinary.com/dlteq4ism/image/upload/v1741265738/figma_bg6ci0.png",
      },
    ],
  },
];

function Home() {
  return (
    <main className={cx("wrapper")}>
      <section className={cx("section__about")}>
        <div className={cx("section__about-title")}>
          <h1>About me</h1>
        </div>
        <div className={cx("section__about-content")}>
          <div className={cx("section__about-avatar")}>
            <img
              src="https://res.cloudinary.com/dlteq4ism/image/upload/v1741162882/avt_dqsrbq.png"
              alt="avatar"
            />
          </div>

          <div className={cx("section__about-info")}>
            <div className={cx("about__info-title")}>
              <h1>
                Hi, I'm<span> Nguyen Xuan Binh</span>
              </h1>
              <h2>Frontend Developer Based In Ho Chi Minh City</h2>
            </div>
            <div className={cx("about__info-content")}>
              <div className={cx("info__content-card")}>
                <h2>
                  <FontAwesomeIcon icon={faSchool} /> EDUCATION
                </h2>
                <p className={cx("school__name")}>
                  HCMC UNIVERSITY OF INDUSTRY AND TRADE
                </p>
                <p>Major: Software Engineering (2021 - 2025)</p>
                <p>Bachelor of Information Technology.</p>
                <p>GPA: 3.08/4.0</p>
              </div>
              <div className={cx("info__content-card")}>
                <h2>
                  <FontAwesomeIcon icon={faAddressCard} /> CONTACT
                </h2>
                <p>
                  <FontAwesomeIcon icon={faPhone} /> +84 337 467 283
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                  nguyenbinh17062003@gmail.com
                </p>
                <p>
                  <FontAwesomeIcon icon={faGithub} />{" "}
                  https://github.com/XBinhs17
                </p>
                <p>
                  <FontAwesomeIcon icon={faHouse} /> Binh Tan District, Ho Chi
                  Minh City
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cx("section__skills")}>
        <div className={cx("section__skills-title")}>
          <h1>Skills</h1>
        </div>

        <div className={cx("section__skills-content")}>
          {skills.map((skill, index) => (
            <div key={index} className={cx("skill__card")}>
              <div className={cx("skill__card-title")}>
                <h2>{skill.category}</h2>
              </div>
              <div className={cx("skill__card-content")}>
                {skill.items.map((item, i) => (
                  <div key={i} className={cx("skill__card-item")}>
                    <div className={cx("card__item-img")}>
                      <img src={item.img} alt={`${item.name} logo`} />
                    </div>
                    <div className={cx("card__item-content")}>
                      <h3>{item.name}</h3>
                      <p>{item.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={cx("section__qualification")}>
        <div className={cx("section__skills-title")}>
          <h1>Qualification</h1>
        </div>
      </section>
    </main>
  );
}

export default Home;
