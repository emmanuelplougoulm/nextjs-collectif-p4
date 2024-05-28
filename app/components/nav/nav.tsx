"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./nav.module.css";

type NavPropsType = {
  className?: string;
};
const Nav: React.FC<NavPropsType> = ({ className }) => {
  const [activePath, setActivePath] = useState<string>("");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  const navItems = [
    {
      name: "Manifeste",
      href: "/pages/manifeste",
    },
    {
      name: "Membres",
      href: "/pages/membres",
    },
    {
      name: "Actualités",
      href: "/pages/actualites",
    },
    {
      name: "Spectacles",
      href: "/pages/spectacles",
    },
    {
      name: "Contact",
      href: "/pages/contact",
    },
  ];

  const isActive = (location: string) => {
    return activePath === location ? styles.selected : "";
  };

  return (
    <div>
      <nav className={`${styles["nav"]} ${className || ""}`}>
        <ol>
          {navItems.map((item) => (
            <Link
              key={item.name}
              className={isActive(item.href)}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Nav;
