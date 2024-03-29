import "./styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/vans/Home";
import About from "./pages/vans/About";
import Vans from "./pages/vans/Vans";
import VanDetails from "./pages/vans/VanDetail";
import Layout from "./component/Layout";
import Dashboard from "./pages/host/Dashbord";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostLayout from "./component/HostLayout";
import HostVans from "./pages/host/HostVans";
import HostVanDetail from "./pages/host/HostVanDetail";
// import "./server";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route>
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:vanId" element={<VanDetails />} />
          </Route>

          {/* ______________________________________ */}

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="hostvan" element={<HostVans />} />
            <Route path="hostvan/:hostVanId" element={<HostVanDetail />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
