import FormError from "../utils/Error";
import TextInputHookFormWrapper from "./wrappers/hookForm";

/**
 *
 * @typedef {object} Props
 * @prop {string} name
 * @prop {string} label
 * @prop {string} type
 * @prop {string | undefined} error
 * @prop {string} value
 * @prop {(newValue: string) => void} onChange
 * @prop {(newValue: string) => void} onBlur
 * @prop {*} inputRef
 */

/**
 * @param {Props} props
 * @returns {React.ReactElement}
 */
function TextInput({
    name,
    label,
    type = "text",
    error,
    value,
    onChange,
    onBlur,
    inputRef,
}) {
    return (
        <div className="TextInput">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                ref={inputRef}
            />
            <FormError error={error} />
        </div>
    );
}

TextInput.HookForm = TextInputHookFormWrapper;

export default TextInput;
