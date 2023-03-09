import "./App.css";
//fake data from mockaroo.com
import JSONDATA from "./MOCK_DATA.json";

function App() {
    return (
        <div className="App">
            <p>Search by party name/host </p>

            {/* searchbar */}
            <input type="text" placeholder="Search..." />

            {JSONDATA.map((val, key) => {
                return (
                    <div>
                        <p>
                            name: {val.name} &nbsp; price:{val.price} &nbsp;
                            date: {val.date}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
