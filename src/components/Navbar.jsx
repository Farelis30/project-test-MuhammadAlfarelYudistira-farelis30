"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [currentPath, setCurrentPath] = useState(path);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setShowNavbar(currentScrollPos > prevScrollPos || currentScrollPos == 0);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handlePathChange = () => {
    setCurrentPath(path);
  };

  useEffect(() => {
    handlePathChange();
  }, [path]);

  return (
    <div
      className={`${showNavbar ? "block" : "fixed top-0 left-0 right-0 z-50"} ${
        showNavbar
          ? "bg-gradient-to-t from-[#e65c20] to-[#ec6327]"
          : "bg-opacity-80 bg-[#e65c20]"
      } h-16 px-24 flex items-center justify-between text-white transition-all duration-300`}
    >
      <div>
        <Link href={"/"}>
          <img
            src="https://suitmedia.com/_nuxt/img/logo-white.081d3ce.png"
            alt=""
            className="h-10"
          />
        </Link>
      </div>
      <div className="flex gap-6">
        <NavLink path={"/work"} currentPath={currentPath}>
          Work
        </NavLink>
        <NavLink path={"/about"} currentPath={currentPath}>
          About
        </NavLink>
        <NavLink path={"/services"} currentPath={currentPath}>
          Services
        </NavLink>
        <NavLink path={"/ideas"} currentPath={currentPath}>
          Ideas
        </NavLink>
        <NavLink path={"/careers"} currentPath={currentPath}>
          Careers
        </NavLink>
        <NavLink path={"/contact"} currentPath={currentPath}>
          Contact
        </NavLink>
      </div>
    </div>
  );
};

const NavLink = ({ path, currentPath, children }) => (
  <Link
    href={path}
    className={
      currentPath === path
        ? "underline underline-offset-8 decoration-2"
        : "duration-300 hover:underline hover:underline-offset-8 hover:decoration-2"
    }
  >
    {children}
  </Link>
);

export default Navbar;
