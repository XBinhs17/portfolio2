import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skill" },
  { name: "Qualification", path: "/qualification" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Other", path: "/other" },
];

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("logo")}>NXB</div>
      <nav className={cx("menu")}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
                <NavLink
                    to={item.path}
                    className={({isActive}) => cx('menu__item', {active: isActive})}
                >
                    {item.name}
                </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
