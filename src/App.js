import React, {useState} from "react";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import './css/styles.css'

const App = () => {
  const [showSubscribe, setShowSubscribe] = useState(false)
  const close = () => {
    setShowSubscribe(showSubscribe => !showSubscribe)
  }
  return (
    <div className="App">
      <Navbar close={close} />
        <Routes>
          <Route path="/" element={<Home close={close} showSubscribe={showSubscribe} />} />
          <Route path="*" element={<NotFound status={404} />} />
        </Routes>
      <Footer />
    </div>
  );
}
export default App;
