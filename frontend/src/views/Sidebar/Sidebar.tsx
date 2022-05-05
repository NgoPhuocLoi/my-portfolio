import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaHome, FaUserAlt, FaTimes } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { MdWork } from "react-icons/md";
import "./Sidebar.scss";

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
  // {
  //   title: "Services",
  //   icon: <FaListUl></FaListUl>,
  //   link: "#services",
  // },
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
  const asideRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const togglerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [lastScroll, setLastScroll] = useState<number>(0);
  const [isOpenSidebar, setOpenSidebar] = useState<boolean>(false);

  const toggleOpenMenu = () => {
    togglerRef.current.classList.toggle("active");
    asideRef.current.classList.toggle("open");
    setOpenSidebar((prev) => !prev);
  };

  const handleClickItem = (idx: number) => {
    setActive(idx);
    togglerRef.current.classList.remove("active");
    asideRef.current.classList.remove("open");
    setOpenSidebar((prev) => !prev);
  };

  // handle hide sidebar when scroll
  const handleScroll = () => {
    setScrollTop(window.pageYOffset);
  };

  useEffect(() => {
    if (window.innerWidth > 650) {
      document.addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    if (scrollTop > 85) {
      if (scrollTop > lastScroll) {
        asideRef.current.style.top = "-85px";
      } else {
        asideRef.current.style.top = "0px";
      }

      setLastScroll(scrollTop);
    }
  }, [scrollTop]);

  return (
    <div className="aside" ref={asideRef}>
      <div className="logo">
        <a href="#">NPLoi</a>
      </div>
      <div className="nav-toggler" onClick={toggleOpenMenu} ref={togglerRef}>
        {isOpenSidebar ? <FaTimes></FaTimes> : <AiOutlineMenu></AiOutlineMenu>}
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
