import React from "react";
import './header.css'

export default function Header({isLogin, toggleLogin}) {
    return <>
        <div className="container">
            <div className="headerContainer">
                <div className="logo">
                    <div className="logo-img"/>
                    <div className="logo-name">Booking</div>
                </div>
                <div className="menu">
                    <button className="menu_button">about</button>
                    <button className="menu_button">my booking</button>
                    {
                        isLogin ? (
                            <>
                                <span>Екатерина</span>
                                <button className="menu_button" onClick={toggleLogin}>sing out</button>
                            </>
                        ) : <button className="menu_button" onClick={toggleLogin}>sign in</button>
                    }
                </div>
            </div>

        </div>
    </>
}
