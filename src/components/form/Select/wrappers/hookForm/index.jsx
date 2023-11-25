import Select from "../..";

function SelectHookFormWrapper({ name, label, error, register, options }) {
    const { name: registeredName, onBlur, onChange, ref } = register(name);

    return (
        <Select
            label={label}
            name={registeredName}
            onChange={onChange}
            onBlur={onBlur}
            inputRef={ref}
            error={error}
            options={options}
        />
    );
}

export default SelectHookFormWrapper;
