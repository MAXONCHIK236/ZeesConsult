import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header/Header";
import About from "./components/AboutUs/About";
import Guarantee from "./components/Guarantee/Guarante";
import Sheme from "./components/Sheme/Sheme";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main/Main";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contacts from "./pages/Contacts/Contacts";
import Service from "./pages/servicesPersonal/Service";
import ServicesEmployer from "./pages/servicesEmployer/ServicesEmployer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< MainPage/>} />
          <Route path="/AboutUs" element={< AboutUs/>} />
          <Route path="/Contact" element={< Contacts/>} />
          <Route path="/ServicePersonal" element={< Service/>} />
          <Route path="/ServiceEmployer" element={<ServicesEmployer/>} />
           
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
