import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from './layout/Mainlayout';
import Home from './pages/Home';

const App = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>

                {/* No Navbar Pages (Auth & Dashboard) */}
            </Routes>
        </BrowserRouter>

    )
}

export default App