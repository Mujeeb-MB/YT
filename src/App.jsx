import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AwsPage from "./pages/AwsPage";
import CssPage from "./pages/CssPage";
import DsaPage from "./pages/DsaPage";
import GitPage from "./pages/GitPage";
import HtmlPage from "./pages/HtmlPage";
import InterviewPage from "./pages/InterviewPage";
import JavaScriptPage from "./pages/JavaScriptPage";
import ReactPage from "./pages/ReactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aws" element={<AwsPage />} />
        <Route path="/css" element={<CssPage />} />
        <Route path="/dsa" element={<DsaPage />} />
        <Route path="/git" element={<GitPage />} />
        <Route path="/html" element={<HtmlPage />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/javascript" element={<JavaScriptPage />} />
        <Route path="/react" element={<ReactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
