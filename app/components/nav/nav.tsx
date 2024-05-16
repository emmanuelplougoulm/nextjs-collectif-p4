import Link from "next/link";
import styles from "./nav.module.css";

type NavProps = {
  className?: string;
};

const Nav: React.FC<NavProps> = ({ className }) => {
  return (
    <div>
      <nav className={`${styles["nav"]} ${className}`}>
        <ol>
          <Link href="/pages/manifeste">Manifeste</Link>
          <Link href="/pages//membres">Membres</Link>
          <Link href="/pages//actualites">Actualités</Link>
          <Link href="/pages//spectacles">Spectacles</Link>
          <Link href="/pages//contact">Contact</Link>
        </ol>
      </nav>
    </div>
  );
};

export default Nav;
