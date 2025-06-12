import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {

    const { theme, setTheme } = useContext(ThemeContext);
    const location = useLocation();

    const dropdownPaths = [
        "/oneToFive",
        "/sixToEight",
        "/tenToEleven",
        "/twelveToTwenty",
        "/twentyOneToTwentyFive/JPR0142"
    ];

    const isDropdownActive = dropdownPaths.some(path => {
        return (
            location.pathname === path || location.pathname.startsWith(path + "/")
        );
    });

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">React</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Axios</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/hoc">HOC</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/propsDrilling">Props Drilling</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/customHook">Custom Hook</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/ls">LS</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link dropdown-toggle ${isDropdownActive ? "active" : ""}`} to="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={(e) => e.preventDefault()}>
                                    Series
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/oneToFive">One To Five</Link></li>
                                    <li><Link className="dropdown-item" to="/sixToEight">Six To Eight</Link></li>
                                    <li><Link className="dropdown-item" to="/tenToEleven">Ten To Eleven</Link></li>
                                    <li><Link className="dropdown-item" to="/twelveToTwenty">Twelve To Twenty</Link></li>
                                    <li><Link className="dropdown-item" to="/twentyOneToTwentyFive/JPR0142">TwentyOne To TwentyFive</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className={`btn navbar-expand-lg bg-body-tertiary ${theme === "light" ? "btn-outline-dark" : "btn-outline-light"}`} type="button">{theme === "light" ? "Light" : "Dark"}</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;