import { useState } from "react";
import './App.css';
import PredictionForm from "./components/PredictionForm";

function App() {
    const [employee, updateEmployee] = useState([]);

    const queryModel = (employeeInfo) => {
        console.log(employeeInfo);
    };

    // console.log(contacts)
    return (
        <div className="App">
            <header className="App-header">
            <PredictionForm queryModel={queryModel} />
            </header>
        </div>
    );
}

export default App;
