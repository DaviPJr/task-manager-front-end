import CustomButton from "../components/CustomButton";

import { useNavigate } from "react-router-dom";
import "./Login.scss";
import logo from "../assets/logo.svg";

const Login = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Davi Pereira Web Developer" />
      <div className="button-container">
        <CustomButton onClick={handleNavigate}>Entrar</CustomButton>
      </div>
    </div>
  );
};

export default Login;
