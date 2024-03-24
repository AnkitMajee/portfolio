import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loader from "./components/Loader";
function App() {
  const [showloading, setShowLoading] = useState(false);
  return (
    <BrowserRouter>
    {showloading ? <Loader /> : null}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
