import { useState } from "react";
import { useRef } from "react";

function PredictionForm() {
    const nameRef = useRef();
    const addressRef = useRef();
    const typeRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        console.log('name:', nameRef.current.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:
                    <input type="text" name="name" defaultValue="Wu Tang" ref={nameRef} />
                </label>
            </div>
            <div>
                <label>Address:
                    <input type="text" name="address" defaultValue="Shaolin" ref={addressRef} />
                </label>
            </div>
            <div>
                <label>Type:
                    <input type="text" name="type" defaultValue="Wu Tang" ref={typeRef} />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default PredictionForm;