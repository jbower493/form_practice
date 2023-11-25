import TextInput from "../..";

/**
 *
 * @typedef {object} Props
 * @prop {import('react-hook-form').UseFormRegister<Record<string, string>>} register
 * @prop {string} name
 * @prop {string} label
 * @prop {string} type
 * @prop {string | undefined} error
 */

/**
 * @param {Props} props
 * @returns {React.ReactElement}
 */
function TextInputHookFormWrapper({
    name,
    label,
    type = "text",
    error,
    register,
}) {
    const { name: registeredName, onBlur, onChange, ref } = register(name);

    return (
        <TextInput
            label={label}
            type={type}
            name={registeredName}
            onChange={onChange}
            onBlur={onBlur}
            inputRef={ref}
            error={error}
        />
    );
}

export default TextInputHookFormWrapper;
