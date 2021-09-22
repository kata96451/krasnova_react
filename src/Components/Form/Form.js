import './form.css'

export default function Form() {
    return<>
    <div className="container">
        <div>
            <form action="#" className="form-box">
                <input type="text"placeholder="Destination" className="form-item "/><span className="marked-input"></span>
                <input type="text"  placeholder="Check-in" className="form-item"/>
                <input type="text" placeholder="Check-out" className="form-item"/>
                <input type="number" placeholder="Adults" className="form-item mini-input"/>
                <input type="number" placeholder="Children" className="form-item mini-input"/>
                <button className="button-search">search</button>
            </form>
        </div>
    </div>
    </>
}