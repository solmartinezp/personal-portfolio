import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { About } from '../../pages/About';
import { Layout } from '../../pages/Layout';
import { Contact } from '../../pages/Contact';
import { Projects } from '../../pages/Projects';
import { Stack } from "../../pages/Stack";

import { AnimatePresence } from 'framer-motion';

export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname} >
                <Route path="/" element={<Layout />} />
                <Route path="about" element={<About />} />
                <Route path="stack" element={<Stack />} />
                <Route path="projects" element={<Projects />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
      </AnimatePresence>
    );
};