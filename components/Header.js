import Image from "next/image";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header} data-testid="header">
      <div className={styles.linkBar}>
        <Link
          className={styles.socialLink}
          data-testid="github-link"
          href="https://github.com/dustinyschild"
          target="_blank"
        >
          <Image
            alt="Github - Dustinyschild's Profile"
            src="/github-icon.png"
            width="24"
            height="24"
          />
        </Link>
        <Link
          className={styles.socialLink}
          data-testid="linkedin-link"
          href="https://www.linkedin.com/in/dustinyschild/"
          target="_blank"
        >
          <Image
            alt="Dustin Yelland - LinkedIn"
            src="/linkedin-icon.png"
            width="24"
            height="24"
          />
        </Link>
      </div>

      <h1 className={styles.mainHeader} data-testid="main-heading">
        Photo Album Showcase
      </h1>
      <h2 className={styles.subHeader} data-testid="sub-heading">
        by Dustin Yelland
      </h2>
    </header>
  );
};

export default Header;
