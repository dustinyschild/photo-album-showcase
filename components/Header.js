import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header} data-testid="header">
      <div className={styles.linkBar}>
        <a className={styles.socialLink} data-testid="github-link" href="#">
          Github
        </a>
        <a className={styles.socialLink} data-testid="linkedin-link" href="#">
          LinkedIn
        </a>
      </div>

      <h1 className={styles.mainHeader} data-testid="main-heading">
        Photo Album Showcase
      </h1>
      <h2 className={styles.subHeader} data-testid="sub-heading">
        {" "}
        by Dustin Yelland
      </h2>
    </header>
  );
};

export default Header;
