import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound status={404} />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
