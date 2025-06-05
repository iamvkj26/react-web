import { useState } from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import HOC from "./HOC";
import PropsDrilling from "./propsDrilling/PropsDrilling";
import CustomHook from "./customHook/CustomHook";
import LS from "./localStorage/LS";
import OneToFive from "./oneToFive/OneToFive";
import SixToEight from "./sixToEight/SixToEight";
import TenToEleven from "./tenToEleven/TenToEleven";
import TwelveToTwenty from "./twelveToTwenty/TwelveToTwenty";
import { ThemeContext } from "./context/ThemeContext";
import TwentyOneToTwentyFive from "./twentyOneToTwentyFive/TwentyOneToTwentyFive";

const App = () => {

    const user = { name: "John Doe" };
    const [theme, setTheme] = useState("light");

    return (
        <>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <Routes>
                            <Route path="/" element={<HOC />} />
                            <Route path="/propsDrilling" element={<PropsDrilling user={user} />} />
                            <Route path="/customHook" element={<CustomHook />} />
                            <Route path="/ls" element={<LS />} />
                            <Route path="/oneToFive" element={<OneToFive />} />
                            <Route path="/sixToEight" element={<SixToEight />} />
                            <Route path="/tenToEleven" element={<TenToEleven />} />
                            <Route path="/twelveToTwenty" element={<TwelveToTwenty />} />
                            <Route path="/twentyOneToTwentyFive/:id" element={<TwentyOneToTwentyFive />} />
                        </Routes>
                    </div>
                </div>
            </ThemeContext.Provider>
        </>
    );
};

export default App;