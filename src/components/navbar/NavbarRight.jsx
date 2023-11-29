import navIcon from "../../assets/Icon-ionic-ios-arrow-down.png";
import searchIcon from "../../assets/Icon-material-search.png";

const NavbarRight = ({ direction }) => {
  const navLinks = [
    { id: 1, name: "Qualifications", icon: navIcon },
    { id: 2, name: "Organizations", icon: navIcon },
    { id: 3, name: "Research & Analysis", icon: navIcon },
    { id: 4, name: "Lorem ipsum", icon: navIcon },
    { id: 5, name: "Lorem ipsum", icon: navIcon },
  ];
  return (
    <div className={`navbar-right ${direction}`}>
      <nav className={`nav ${direction}`}>
        {navLinks.map((navlink) => (
          <a className="nav-link" key={navlink.id} href="#">
            {navlink.name}
            <img src={navlink.icon} alt="down-arrow" />
          </a>
        ))}
      </nav>

      <div className="search-icon">
        <img src={searchIcon} alt="search-icon" />
      </div>

      <div className="nav-button-container">
        <button className="button nav-button">Enrolment</button>
      </div>
    </div>
  );
};

export default NavbarRight;
