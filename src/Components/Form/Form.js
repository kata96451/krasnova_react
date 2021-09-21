import './form.css'

export default function Form() {
    return<>
    <div className="container">
        <div>
            <form action="#" className="form-box">
                <select name="Destination" placeholder="Destination" className="form-item">
                    <option value="Destination" >Destination</option>
                    <option value="England">Англия</option>
                    <option value="USA">США</option>
                    <option value="Canada">Канада</option>
                </select>
                <input type="date" placeholder="Check-in" className="form-item"/>
                <input type="date" placeholder="Check-out" className="form-item"/>
                <input type="number" placeholder="Adults" className="form-item"/>
                <input type="number" placeholder="Children" className="form-item"/>
                <button className="button-search">search</button>
            </form>
        </div>
    </div>
    </>
}