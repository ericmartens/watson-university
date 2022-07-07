import { useState } from "react";

function PredictionForm({queryModel}) {
    const [employeeInfo, setEmployeeInfo] = useState({
        salary: "",
        overtime: ""
    });

    const handleChange = (event) => {
        setEmployeeInfo({ ...employeeInfo, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        queryModel(employeeInfo);
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Salary:
                    <input type="number" name="salary" value={employeeInfo.salary} onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>Overtime:
                    <input type="number" name="overtime" value={employeeInfo.overtime} onChange={handleChange} />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default PredictionForm;