import styles from "./Navbar.module.css";
import logo from "../../assets/images/ezTechLogo.png";

const links = [
  { label: "Projetos", href: "#projects" },
  { label: "Servicos", href: "#services" },
  { label: "Contato", href: "#contact" },
];

function Navbar() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a
          className={styles.logo}
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="ezfTech Logo" />
        </a>
        <nav className={styles.nav}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={handleClick}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
