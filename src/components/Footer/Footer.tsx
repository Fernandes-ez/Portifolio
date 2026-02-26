import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.copy}>
          © 2026 Enzo Duarte. Desenvolvido com React + TypeScript
        </span>
      </div>
    </footer>
  );
}

export default Footer;
