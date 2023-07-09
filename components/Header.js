const Header = () => {
  return (
    <header data-testid="header">
      <div>
        <a data-testid="linkedin-link" href="#">
          LinkedIn
        </a>
        <a data-testid="github-link" href="#">
          Github
        </a>
      </div>

      <h1 data-testid="main-heading">Photo Album Showcase</h1>
      <h2 data-testid="sub-heading"> by Dustin Yelland</h2>
    </header>
  );
};

export default Header;
