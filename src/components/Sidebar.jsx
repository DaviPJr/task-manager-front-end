import "./Sidebar.scss";

import CustomButton from "./CustomButton";
import logo from "../assets/logo.svg";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo">
        <img src={logo} alt="Davi Pereira Web Developer" />
      </div>

      <div className="sign-out">
        <CustomButton>Sair</CustomButton>
      </div>
    </div>
  );
};

export default Sidebar;
