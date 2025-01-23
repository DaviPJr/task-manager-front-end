/* eslint-disable react/prop-types */
import "./CustomButton.scss";

const CustomButton = ({ children, onClick }) => {
  return (
    <div className="custom-button-container" onClick={onClick}>
      {children}
    </div>
  );
};

export default CustomButton;
