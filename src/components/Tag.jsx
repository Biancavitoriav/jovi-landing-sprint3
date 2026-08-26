const Tag = ({
    children,
    variante = 'contorno',
    escura = false,
    ...props
}) => {
    const classes = [
        'tag',
        `tag-${variante}`,
        escura && 'tag-escura',
    ].filter(Boolean).join(' ')

    return (
        <span className={classes} {...props}>
            {children}
        </span>
    )
}

export default Tag
