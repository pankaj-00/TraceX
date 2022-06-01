import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Content, Navbar, Search, PopPro, SingleProduct, Home } from "./Components";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>  
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/singleProduct" element={<SingleProduct/>}/>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
