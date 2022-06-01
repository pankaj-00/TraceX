import "./ModalLogin.scss";
import { google, facebook, github } from "../../../constants/images";
import { Button } from "react-bootstrap";

const ModalLogin = ({ handleGoogleLogin }) => {
  return (
    <div className="login">
      <h1 className="loginTitle head-text app__font my-8">
        Choose a Login Method
      </h1>
      <div className="wrapper">
        <div className="left">
          <Button className="GoogleSignIn" onClick={handleGoogleLogin}>
            <img src={google} alt="" />
            <p className="p-text text-base font-medium">Sign In With Google</p>
          </Button>
          <Button className="GoogleSignIn fb-bg" onClick={handleGoogleLogin}>
            <img src={facebook} alt="" />
            <p className="p-text text-base font-medium">
              Sign In With Facebook
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
