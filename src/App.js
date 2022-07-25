import React, { useState, useEffect } from "react";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import NotFound from "./pages/NotFound";
import './css/styles.css'
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./utils/firebase";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [showSubscribe, setShowSubscribe] = useState(false)

  const close = () => {
    setShowSubscribe(showSubscribe => !showSubscribe)
  }

  const location = useLocation()
  const [articles, setArticles] = useState([])
  const [loadingArticles, setLoadingArticles] = useState(true)

  const getArticles = async () => {
    return await getDocs(collection(db, "articles"))
  }

  useEffect(() => {

    let isMounted = true; // note mutable flag

    if (location.pathname.match('/article') && articles.length === 0) {
      const newArticles = []

      console.log("Is Fetching...");

      getArticles().then(data => {
        if (isMounted) data.forEach((doc) => {
          const newData = doc.data()
          newData["id"] = doc.id
          newArticles.push(newData)
        });
        setArticles(newArticles)
        setLoadingArticles(false)
      })

    } 
    
    return () => { isMounted = false }; // cleanup toggles value, if unmounted

  }, [location.pathname])


  return (
    <div className="App">
      <Navbar close={close} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home close={close} showSubscribe={showSubscribe} />} />
          <Route path="/articles" element={<Articles articles={articles} loadingArticles={loadingArticles} />} />
          <Route path="/article/:id" element={<Article articles={articles} />} />
          <Route path="*" element={<NotFound status={404} />} />
        </Routes>
        </AnimatePresence>
      <Footer />
    </div>
  );
}
export default App;
