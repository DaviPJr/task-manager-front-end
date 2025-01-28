import "./Sidebar.scss";

import CustomButton from "./CustomButton";
import logo from "../assets/logo.svg";

import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/login");
  };
  return (
    <div className="sidebar-container">
      <div className="logo">
        <img src={logo} alt="Davi Pereira Web Developer" />
      </div>

      <div className="sign-out">
        <CustomButton onClick={handleNavigation}>Sair</CustomButton>
      </div>
    </div>
  );
};

export default Sidebar;
