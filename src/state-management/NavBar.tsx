import LoginStatus from "./auth/LoginStatus";

const NavBar = () => {
  return (
    <nav className="navbar d-flex justify-content-between">
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
