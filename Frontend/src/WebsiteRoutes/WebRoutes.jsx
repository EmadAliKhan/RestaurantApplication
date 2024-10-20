import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../WebsitePages/Home";
import Menu from "../WebsitePages/Menu";
import Aboout from "../WebsitePages/Aboout";
import Reservation from "../WebsitePages/Reservation";
import Contact from "../WebsitePages/Contact";
import Checkout from "../WebsitePages/Checkout";
import AdminForm from "../AdminPages/AdminForm";
import AdminDashboard from "../AdminPages/AdminDashboard";

const WebRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<Aboout />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<AdminForm />} />
        <Route path="/adminPortal/*" element={<AdminDashboard />} />
      </Routes>
    </>
  );
};

export default WebRoutes;
