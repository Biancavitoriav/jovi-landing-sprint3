const CampoInput = ({
    label,
    id,
    name,
    type = 'text',
    placeholder,
    required = false,
    ...props
}) => {
    return (
        <div className="campo">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                required={required}
                {...props}
            />
        </div>
    )
}

export default CampoInput
