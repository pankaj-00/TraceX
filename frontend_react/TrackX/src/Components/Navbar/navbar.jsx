import { tracex } from "../../constants/images";
import { useState } from "react";
import "./navbar.scss";
import ModalLogin from "./ModalLogin/ModalLogin";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";



const ModalLayout = ({ show, setShow, handleGoogleLogin }) => {
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Body>
        <ModalLogin handleGoogleLogin={handleGoogleLogin} />
      </Modal.Body>
    </Modal>
  );
};

const Login = ({ setShow }) => {
  return (
    <div className="app__flex app__navbar-login">
      <button className="app__font login" onClick={() => setShow(true)}>
        Login
      </button>
      <button className="app__font">Signup</button>
    </div>
  );
};

const Profile = ({ currentUser, handleLogout }) => {
  return (
    <div className="app__navbar-profile">
      <img src={currentUser.photoURL} alt={currentUser.displayName} />
      <Button
        variant="outline-info"
        style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}
        onClick={handleLogout}
      >
        Log Out
      </Button>
    </div>
  );
};

const navbar = () => {
  const navContent = [
    "Popular Prices",
    "Top Price Drops",
    "Browser Extensions",
  ];

  const history = useNavigate();

  const { googleSignIn, currentUser, logOut } = useAuth();

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await googleSignIn();

      history("/");
      setShow(false);
    } catch {
      setError("Failed to sign in");
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logOut();
    history("/");
  };

  return (
    <>
      <ModalLayout
        show={show}
        setShow={setShow}
        handleGoogleLogin={handleGoogleLogin}
      />
      <div className="flex p-6 justify-between app__navbar">
        <div className="mx-3 my-5 w-[200px] app__navbar-logo">
          <img src={tracex} alt="" />
        </div>
        <div className="flex  items-center app__navbar-content">
          {navContent.map((content, index) => {
            return (
              <div
                className="rounded mx-4 text-2xl cursor-pointer hover:shadow-lg hover:shadow-slate-200 font-bold app__navbar-contentItem"
                key={index}
              >
                {content}
              </div>
            );
          })}
        </div>
        {currentUser ? (
          <Profile currentUser={currentUser} handleLogout={handleLogout} />
        ) : (
          <Login setShow={setShow} />
        )}
      </div>
      
    </>
  );
};

export default navbar;
