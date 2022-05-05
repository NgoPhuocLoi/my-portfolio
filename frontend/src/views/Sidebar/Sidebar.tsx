import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { FaHome, FaUserAlt, FaTimes, FaLaptopHouse } from "react-icons/fa";
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
  const [theme, setTheme] = useState<string>(localStorage.getItem("theme") as string || "light");

  useEffect(() => {
    if(theme == "dark"){
      document.body.classList.add("dark")
    }
  }, [])

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

  //toggle theme
  const toggleTheme = () => {
    if(theme === "dark"){
      setTheme("light")
      document.body.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }else{
      setTheme("dark")
      document.body.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
    
  };

  // handle click on overlay menu
  useEffect(() => {
    const handleClickOverlay = () => {
      togglerRef.current.classList.remove("active");
      asideRef.current.classList.remove("open");
      setOpenSidebar(false);
    };
    document.body.addEventListener("click", handleClickOverlay);

    return () => {
      document.body.removeEventListener("click", handleClickOverlay);
    };
  }, []);

  return (
    <div
      className="aside"
      ref={asideRef}
      onClick={(e: React.MouseEvent) => e.stopPropagation()}
    >
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

      <div className="toggle-theme" onClick={toggleTheme}>
        {theme === "dark" ? (
          <BsFillSunFill></BsFillSunFill>
        ) : (
          <BsFillMoonFill></BsFillMoonFill>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
