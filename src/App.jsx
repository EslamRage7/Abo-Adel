import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Preloader from "./components/Preloader";

import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import CompanyDetail from "./pages/CompanyDetail";

function App() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/company/:id" element={<CompanyDetail />} />
      </Routes>
    </>
  );
}

export default App;
