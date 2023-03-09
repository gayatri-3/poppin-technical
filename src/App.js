import "./App.css";
//fake data from mockaroo.com
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";

function App() {
    //need to be able to change searchTeerm
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="App">
            <p>Search by party name/host </p>

            {/* searchbar */}
            <input
                type="text"
                placeholder="Search..."
                //searchTerm is set to whatever is inputted
                onChange={(event) => {
                    setSearchTerm(event.target.value);
                }}
            />

            {/* retrieve data from JSON file and display */}
            {/* image is not workin rn */}
            {JSONDATA.filter((val) => {
                //if nothing inputted in search bar, display all parties
                if (searchTerm === "") {
                    return val;
                }
                //return the parties where names match irrespective of case
                else if (
                    val.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                    return val;
                }
            }).map((val, key) => {
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
