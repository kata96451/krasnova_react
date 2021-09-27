import React from "react";
import './header.css'
import {
    Link
} from "react-router-dom";

export default function Header({isLogin, toggleLogin}) {
    return <>
        <div className="container">
            <div className="headerContainer">
                <div className="logo">
                    <div className="logo-img"/>
                    <div className="logo-name">Booking</div>
                </div>
                <div className="menu">
                    <nav>
                        <ul className="menu-list">
                            <li>
                                <Link to="/">
                                    <button className="menu_button">home</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                    <button className="menu_button">about</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/my_booking">
                                    <button className="menu_button">my booking</button>
                                </Link>
                            </li>
                            <li>
                                {
                                    isLogin ? (
                                        <>
                                            <span>Екатерина</span>
                                            <button className="menu_button" onClick={toggleLogin}>sing out</button>
                                        </>
                                    ) : <button className="menu_button" onClick={toggleLogin}>sign in</button>
                                }
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </>
}
