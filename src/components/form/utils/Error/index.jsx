function FormError({ error }) {
    if (!error) return null;

    return <div className="formError">{error}</div>;
}

export default FormError;
