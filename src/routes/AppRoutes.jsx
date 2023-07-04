import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from '../screens/HomeScreen'
import EditScreen from "../screens/EditScreen";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" Component={HomeScreen} />
                <Route path="/edit" Component={EditScreen} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;