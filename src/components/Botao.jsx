const Botao = ({
    children,
    type = 'button',
    variante = 'azul',
    ...props
}) => {
    return (
        <button
            type={type}
            className={`botao botao-${variante}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Botao
