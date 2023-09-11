import { useState } from "react";

export default function TextInput({ onInput }) {
    const [inputValue, setInputValue] = useState("");

    const onChange = (e) => {
        setInputValue(e.target.value);

        onInput(e.target.value);
    };

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={onChange}
            />
            Value: {inputValue}
            <button onClick={() => setInputValue("")}>Clear</button>
        </>
    );
}
