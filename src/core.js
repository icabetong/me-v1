import { BrowserRouter, Routes, Route, } from "react-router-dom";
import AboutPage from "./about/about";
import ContactPage from "./contact/contact";
import history from "./shared/history";
import WorkPage from "./works/works";

function Core() {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/" component={AboutPage} exact/>
        <Route path="/works" component={WorkPage}/>
        <Route path="/contact" component={ContactPage}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Core;
