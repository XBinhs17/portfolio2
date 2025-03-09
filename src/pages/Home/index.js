import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faCakeCandles,
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
        img: "https://res.cloudinary.com/dlteq4ism/image/upload/v1741441766/1175240_kicfzq.webp",
      },
      {
        name: "C",
        level: "Basic",
        img: "https://res.cloudinary.com/dlteq4ism/image/upload/v1741441677/C_Logo_iktf4q.png",
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
      {
        name: "Canva",
        level: "Basic",
        img: "https://res.cloudinary.com/dlteq4ism/image/upload/v1741441583/canva_vjbsa5.webp",
      },
    ],
  },
  {
    category: "Other",
    items: [
      {
        name: "Github",
        level: "Basic",
        img: "https://res.cloudinary.com/dlteq4ism/image/upload/v1741442605/25231_gxva3d.png",
      },
      {
        name: "Postman",
        level: "Basic",
        img: "https://res.cloudinary.com/dlteq4ism/image/upload/v1741442290/postman_vqmc3j.png",
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
          <div className={cx("about__info-title")}>
            <h1>
              Hi, I'm<span> Nguyen Xuan Binh</span>
            </h1>
            <h2>Frontend Developer Based In Ho Chi Minh City</h2>
            <h3>
              <FontAwesomeIcon icon={faCakeCandles} /> June 2003
            </h3>
          </div>

          <div className={cx("section__about-avatar")}>
            <img
              src="https://res.cloudinary.com/dlteq4ism/image/upload/v1741162882/avt_dqsrbq.png"
              alt="avatar"
            />
          </div>

          <div className={cx("section__about-info")}>
            <div className={cx("about__info-content")}>
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
          <h4>My favorite skills</h4>
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
        <div className={cx("section__qualification-title")}>
          <h1>Qualification</h1>
          <h4>Education & Experience</h4>
        </div>

        <div className={cx("section__qualification-content")}>
          <div className={cx("qualification__content-card")}>
            <h1 className={cx("card__title")}>
              <FontAwesomeIcon icon={faSchool} /> EDUCATION
            </h1>
            <div className={cx("card__content")}>
              <div className={cx("content__card-left")}>
                <img
                  src="https://res.cloudinary.com/dlteq4ism/image/upload/v1741439065/HUITPNG_bdyqhi.png"
                  alt="HUIT logo"
                />
              </div>
              <div className={cx("content__card-right")}>
                <h2>HCMC UNIVERSITY OF INDUSTRY AND TRADE</h2>
                <p>Major: Software Engineering (2021 - 2025)</p>
                <p>Bachelor of Information Technology.</p>
                <p>GPA: 3.08/4.0</p>
              </div>
            </div>
          </div>

          <div className={cx("qualification__content-card")}>
            <h1 className={cx("card__title")}>
              <FontAwesomeIcon icon={faBuilding} /> WORK
            </h1>
            <div className={cx("card__content")}>
              <div className={cx("content__card-left")}>
                <img
                  src="https://res.cloudinary.com/dlteq4ism/image/upload/v1741439064/AmazingPNG_fgpbmw.png"
                  alt="AmazingTech logo"
                />
              </div>
              <div className={cx("content__card-right")}>
                <h2>AMAZING TECH</h2>
                <p>Position: Frontend Intern</p>
                <p>Duration: August 2024 – November 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cx("section__services")}>
        <div className={cx("section__services-title")}>
          <h1>Services</h1>
          <h4>What i offer</h4>
        </div>

        <div className={cx("section__services-content")}>
          <div className={cx("service__content-card")}>
            <i className="ri-layout-line"></i>
            <h1>
              UI <br></br> DeSigner
            </h1>
            <p>
              Service that provides the best quality and at the request of the
              client, with professional work and customer support.
            </p>
          </div>

          <div className={cx("service__content-card")}>
            <i className={cx("ri-code-s-slash-line")}></i>
            <h1>
              Website <br></br> Development
            </h1>
            <p>
              Service that provides the best quality and at the request of the
              client, with professional work and customer support.
            </p>
          </div>

          <div className={cx("service__content-card")}>
            <i className="ri-brush-line"></i>
            <h1>
              Banner <br></br> DeSigner
            </h1>
            <p>
              Service that provides the best quality and at the request of the
              client, with professional work and customer support.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
