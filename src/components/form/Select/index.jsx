import FormError from "../utils/Error";
import SelectHookFormWrapper from "./wrappers/hookForm";

function Select({
    name,
    label,
    error,
    options,
    value,
    onChange,
    onBlur,
    inputRef,
}) {
    return (
        <div className="Select">
            <label htmlFor={name}>{label}</label>
            <select
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                ref={inputRef}
            >
                {options.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
            <FormError error={error} />
        </div>
    );
}

Select.HookForm = SelectHookFormWrapper;

export default Select;
