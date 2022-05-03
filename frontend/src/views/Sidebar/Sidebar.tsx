import React from "react";
import "./Sidebar.scss";
import { FaHome, FaUserAlt, FaListUl } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";
import { useState } from "react";
import { useRef } from "react";

interface MenuItem {
  title: string;
  icon: JSX.Element;
  link: string;
}

const menu: MenuItem[] = [
  {
    title: "Home",
    icon: <FaHome></FaHome>,
    link: "#",
  },
  {
    title: "About",
    icon: <FaUserAlt></FaUserAlt>,
    link: "#about",
  },
  {
    title: "Services",
    icon: <FaListUl></FaListUl>,
    link: "#services",
  },
  {
    title: "Portfolio",
    icon: <MdWork></MdWork>,
    link: "#portfolio",
  },
  {
    title: "Contact",
    icon: <IoIosChatbubbles></IoIosChatbubbles>,
    link: "#contact",
  },
];

const Sidebar = () => {
  const [active, setActive] = useState<number>(0);
  const [openMenu, setOpenMenu] = useState<boolean>(false)
  const ref = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  const toggleOpenMenu = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLDivElement;
    target.classList.toggle("active")
    ref.current.classList.toggle("open")
  }

  const handleClickItem = (idx: number) => {
     setActive(idx)
     
  }

  return (
    <div className="aside" ref={ref}>
      <div className="logo">
        <a href="#">NPLoi</a>
      </div>
      <div className="nav-toggler" onClick={toggleOpenMenu}>
        <span></span>
      </div>
      <ul className="nav">
        {menu.map((item, idx) => (
          <li key={idx} onClick={() => handleClickItem(idx)}>
            <a href={item.link} className={idx === active ? "active" : ""}>
              {item.icon}
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
