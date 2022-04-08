import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./page/Home";

import Users from "./page/Users";

function conexãoEntrePages() {

    return (

        <Router>
           <Routes>
                <Route  path="/" element={<Home/>} />
                <Route  path="/usuario" element={<Users/>} />
            </Routes>
        </Router>
    );
}

export default conexãoEntrePages;