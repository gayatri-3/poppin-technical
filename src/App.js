import "./App.css";
import JSONDATA from "./MOCK_DATA.json";

function App() {
    return (
        <div className="App">
            <p>Search by party name/host </p>

            {/* searchbar */}
            <input type="text" placeholder="Search..." />
        </div>
    );
}

export default App;
