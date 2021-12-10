import { BrowserRouter, Routes, Route, } from "react-router-dom";
import AboutPage from "./about/about";
import ContactPage from "./contact/contact";
import history from "./shared/history";
import WorkPage from "./works/works";

function Core() {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/" element={<AboutPage/>} exact/>
        <Route path="/works" element={<WorkPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Core;
