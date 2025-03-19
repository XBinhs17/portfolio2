import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      {
        name: "Cloudinary",
        level: "Basic",
        img: "https://res.cloudinary.com/dlteq4ism/image/upload/v1741934478/cloudinary-icon8821.logowik.com_rvaqiz.webp",
      },
    ],
  },
];

const projects = [
  {
    id: 1,
    image: "https://picsum.photos/200/300",
    title: "Website handicraft products",
    description: "A personal portfolio showcasing projects and skills.",
  },
  {
    id: 2,
    image: "https://picsum.photos/200/300",
    title: "Jewelry business website",
    description:
      "A modern e-commerce platform with React, HTML, CSS, PHP and Node.js.",
  },
];

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className={cx("wrapper")}>
      <section className={cx("section__about")}>
        <div className={cx("section__about-title")}>
          <h1 data-aos="zoom-in">About me</h1>
        </div>
        <div className={cx("section__about-content")}>
          <div data-aos="fade-up" className={cx("about__info-title")}>
            <h1>
              Hi, I'm<span> Nguyen Xuan Binh</span>
            </h1>
            <h2>Frontend Developer Based In Ho Chi Minh City</h2>
            <h3>
              <FontAwesomeIcon icon={faCakeCandles} /> June 2003
            </h3>
            <p>
              I am a Frontend Developer with a strong passion for UI/UX design.
              My strengths lie in building optimized, responsive, and smooth
              interactive interfaces using ReactJS, SCSS, and Bootstrap. I am
              always eager to learn, improve my skills, and develop web products
              that offer the best user experience. My goal is to become a
              professional Frontend Developer, combining both programming logic
              and design aesthetics to create high-quality digital products.
            </p>
          </div>

          <div data-aos="zoom-in" className={cx("section__about-avatar")}>
            <img
              src="https://res.cloudinary.com/dlteq4ism/image/upload/v1741162882/avt_dqsrbq.png"
              alt="avatar"
            />
          </div>

          <div data-aos="fade-left" className={cx("section__about-info")}>
            <div className={cx("about__info-content")}>
              <div className={cx("info__content-card")}>
                <h2>
                  <FontAwesomeIcon icon={faAddressCard} /> CONTACT -
                  <span>Click email to contact me!</span>
                </h2>
                <p>
                  <FontAwesomeIcon icon={faPhone} /> +84 337 467 283
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=nguyenbinh17062003@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    nguyenbinh17062003@gmail.com
                  </a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faGithub} />{" "}
                  <a
                    href="https://github.com/XBinhs17"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/XBinhs17
                  </a>
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
        <div data-aos="zoom-in" className={cx("section__skills-title")}>
          <h1>Skills</h1>
          <h4>My favorite skills</h4>
        </div>

        <div className={cx("section__skills-content")}>
          {skills.map((skill, index) => (
            <div data-aos="fade-up" key={index} className={cx("skill__card")}>
              <div className={cx("skill__card-title")}>
                <h2>{skill.category}</h2>
              </div>
              <div data-aos="zoom-in" className={cx("skill__card-content")}>
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
        <div
          data-aos="fade-left"
          className={cx("section__qualification-title")}
        >
          <h1>Qualification</h1>
          <h4>Education & Experience</h4>
        </div>

        <div className={cx("section__qualification-content")}>
          <div
            data-aos="fade-right"
            className={cx("qualification__content-card")}
          >
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
                <h2>
                  <a
                    href="https://amazingtech.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AMAZING TECH COMPANY
                  </a>
                </h2>
                <p>Position: Frontend Intern</p>
                <p>Duration: August 2024 – November 2024</p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className={cx("qualification__content-card")}
          >
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
                <h2>
                  <a
                    href="https://huit.edu.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HCMC UNIVERSITY OF INDUSTRY AND TRADE
                  </a>
                </h2>
                <p>Major: Software Engineering (2021 - 2025)</p>
                <p>Bachelor of Information Technology.</p>
                <p>GPA: 3.08/4.0</p>
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
          <div data-aos="zoom-in" className={cx("service__content-card")}>
            <i className="ri-layout-line"></i>
            <h1>
              UI <br></br> DeSigner
            </h1>
            <p>
              Service that provides the best quality and at the request of the
              client, with professional work and customer support.
            </p>
          </div>

          <div data-aos="zoom-in" className={cx("service__content-card")}>
            <i className={cx("ri-code-s-slash-line")}></i>
            <h1>
              Website <br></br> Development
            </h1>
            <p>
              Service that provides the best quality and at the request of the
              client, with professional work and customer support.
            </p>
          </div>

          <div data-aos="zoom-in" className={cx("service__content-card")}>
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

      <section className={cx("section__projects")}>
        <div className={cx("section__projects-title")}>
          <h1>Projects</h1>
          <h4>Most recent work</h4>
        </div>

        <div className={cx("section__projects-content")}>
          {/* project1 */}
          <div className={cx("project__card", "container-fill")}>
            <div className={cx("row")}>
              <div className={cx("col-md-6", "left__row1")}>
                <img src="https://res.cloudinary.com/dlteq4ism/image/upload/v1742129058/tcmn1_ck1dfq.jpg" />
              </div>
              <div className={cx("col-md-6", "right__row1")}>
                <h1 className={cx("project-name")}>
                  Website introducing and providing Vietnamese handicraft
                  products
                </h1>
                <h4>Date: 9/2024 - 12/2024</h4>
                <h4>
                  Team size: <span>3</span>
                </h4>
                {/* Công nghệ sử dụng */}
                <h4>Technologies:</h4>
                <ul className={cx("technologies-list")}>
                  <li>
                    <strong>Frontend:</strong> ReactJS, Redux, SCSS, Bootstrap
                  </li>
                  <li>
                    <strong>Backend:</strong> Node.js, Express.js, MongoDB
                  </li>
                  <li>
                    <strong>Authentication:</strong> JWT (JSON Web Token)
                  </li>
                  <li>
                    <strong>Cloud Storage:</strong> Cloudinary
                  </li>
                  <li>
                    <strong>Hosting:</strong> Vercel (Frontend), Render
                    (Backend)
                  </li>
                </ul>
                {/* Chức năng chính */}
                <h4>Personal Role:</h4>
                <ul>
                  <li>Customer:</li>
                </ul>
                <ul>
                  <li>Admin:</li>
                </ul>

                {/* Vai trò cá nhân */}
                <h4>Personal Role:</h4>
                <ul className={cx("role-list")}>
                  <li>Developed UI/UX for the website using ReactJS & SCSS.</li>
                  <li>Implemented state management using Redux.</li>
                  <li>
                    Integrated API for authentication and product management.
                  </li>
                  <li>Optimized responsive design for mobile and desktop.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={cx("section__other")}>
        <div className={cx("section__other-title")}>
          <h1>Other</h1>
          <h4>My Personal Interests</h4>
        </div>

        <div className={cx("section__other-content")}>
          <div
            className={cx("other__content-card")}
            onClick={() => navigate("/artworks")}
            data-aos="zoom-right"
          >
            <i className="ri-paint-brush-line"></i>
            <h2>My Drawings</h2>
            <p>View my collection of hand-drawn artwork.</p>
          </div>

          <div
            className={cx("other__content-card")}
            onClick={() => navigate("/designs")}
            data-aos="zoom-left"
          >
            <i className="ri-image-line"></i>
            <h2>Design Works</h2>
            <p>
              Explore my graphic design projects including banners, posters, and
              more.
            </p>
          </div>
        </div>
      </section>

      <div className={cx("contact__me")}>
        <button>
          {" "}
          <a
            href="https://mail.google.com/mail/?view=cm&to=nguyenbinh17062003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} /> Contact Me With Gmail
          </a>
        </button>
      </div>
    </main>
  );
}

export default Home;
