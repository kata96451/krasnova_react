import './header.css'

export default function Header() {
    return <>
        <div className="container">
            <div className="headerContainer">
                <div className="logo">
                    <div className="logo-img"></div>
                    <div className="logo-name">Booking</div>
                </div>
                <div className="menu">
                    <button className="menu_button">about</button>
                    <button className="menu_button">my booking</button>
                    <button className="menu_button">sing in</button>
                </div>
            </div>

        </div>
    </>
}