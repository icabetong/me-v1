import { BrowserRouter, Routes, Route, } from "react-router-dom";
import AboutPage from "./about/about";
import ContactPage from "./contact/contact";
import HomePage from "./home/home";
import history from "./shared/history";
import WorkPage from "./works/works";

function Core() {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/" element={<HomePage/>} exact/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/works" element={<WorkPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Core;
