import { useEffect } from "react";

export default function FormDropdown({ id, label, options, onChange }) {
    
    useEffect(() => {
        console.log(options);
    }, [options]);

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <select
                style={{ padding: "12px", marginTop: "6px" }}
                className="form-select"
                name={label}
                id={id}
                onChange={onChange}
            >
                <option value="" disabled selected>
                    {label}
                </option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}
