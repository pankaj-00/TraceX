import { motion } from "framer-motion";
import "./mobileNav.scss";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from 'react';
import ModalLogin from "./ModalLogin/ModalLogin";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { tracex } from "../../constants/images";

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
    <p className="navbar-login">
      <button className="app__font Login" onClick={() => setShow(true)}>
        Login
      </button>
      <button className="app__font">Signup</button>
    </p>
  );
};

const Profile = ({ currentUser, handleLogout }) => {
  return (
    <p className="app__navbar-profile">
      <img src={currentUser.photoURL} alt={currentUser.displayName} />
      <Button
        variant="outline-info"
        style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}
        onClick={handleLogout}
      >
        Log Out
      </Button>
    </p>
  );
};

const MobileNav = () => {
  
  const[Toggle, setToggle] = useState(false);
  


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
        <div className="mobileContainer">
          <ModalLayout
            show={show}
            setShow={setShow}
            handleGoogleLogin={handleGoogleLogin}
          />
          <div className="app__navbar-menu">
            <HiMenu onClick={() => setToggle(true)} />

            {Toggle && (
              <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: "easeOut" }}
              >
                <p className=" flex justify-end w-[100%]">
                  <HiX onClick={() => setToggle(false)} />
                </p>
                <ul>
                  {navContent.map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </a>
                    </li>
                  ))}
                  <li>
                    {currentUser ? (
                      <Profile
                        currentUser={currentUser}
                        handleLogout={handleLogout}
                      />
                    ) : (
                      <Login setShow={setShow} />
                    )}
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </>
    );
};

export default MobileNav;
