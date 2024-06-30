import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { About } from '../../pages/About';
import { Layout } from '../../pages/Layout';
import { Contact } from '../../pages/Contact';
import { Projects } from '../../pages/Projects';
import { Stack } from "../../pages/Stack";
import { Home } from '../../pages/Home';

import { AnimatePresence } from 'framer-motion';

export default function AnimatedRoutes() {
    return (
        <AnimatePresence>
            <Routes>
                <Route element={<Layout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="stack" element={<Stack />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
      </AnimatePresence>
    );
};