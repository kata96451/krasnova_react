import React from "react";
import './myBooking.css'


export default function MyBooking() {
    return <>
        <main className="container">
            <h3 className="h3">Your travels</h3>
            <ul className="travel-list" >
                <li className="travel-item">Parish</li>
                <li className="travel-item">Australia</li>
            </ul>
        </main>
    </>
}