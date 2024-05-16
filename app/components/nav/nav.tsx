import Link from "next/link";

type NavProps = {
  className?: string;
};

const Nav: React.FC<NavProps> = ({ className }) => {
  return (
    <nav className={className}>
      <ol>
        <Link href="/pages/manifeste">Manifeste</Link>
        <Link href="/pages//membres">Membres</Link>
        <Link href="/pages//actualites">Actualités</Link>
        <Link href="/pages//spectacles">Spectacles</Link>
        <Link href="/pages//contact">Contact</Link>
      </ol>
    </nav>
  );
};

export default Nav;
