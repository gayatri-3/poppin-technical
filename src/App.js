import "./App.css";
//fake data from mockaroo.com
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";

//  const addParty = () => {
//      const python_code = `
//         import json
//                 entry = {
//                   "id": 11,
//                   "name": "Random",
//                   "banner": "http://dummyimage.com/231x100.png/ff4444/ffffff",
//                   "price": 11.11,
//                   "date": "2022-08-29 19:14:13"
//         }
//         #read file content
//         with open(JSONDATA, "r") as file:
//         data = json.load(file)

//         #update json Object
//         data.append(entry)

//         #write json file
//         with open(JSONDATA, "w") as file:
//         json.dump(data, file)
//               print("hello")
//             `;

//     const pyodide = window.pyodide;

//     pyodide.runPython(python_code);
// };

function App() {
    //need to be able to change searchTeerm
    const [searchTerm, setSearchTerm] = useState("");

    function alertAddedParty() {
        alert("Added Random Party!");
    }

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
                            date: {val.date} &nbsp;
                            <img src={val.banner}></img>
                        </p>
                    </div>
                );
            })}

            {/* Add Random Party button  
            Alerts user onClick that party was added*/}
            <button onClick={alertAddedParty}> Add Random Party </button>
            <p> Developed by: Gayatri Puppala </p>
        </div>
    );
}

export default App;
