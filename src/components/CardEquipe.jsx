const CardEquipe = ({ foto, nome, cargo }) => {
    return (
        <li className="card-equipe item">
            <img
                className="foto-equipe"
                src={foto}
                alt={`Integrante da equipe ${nome}`}
                width="160"
                height="160"
                loading="lazy" />
            <h3>{nome}</h3>
            <p>{cargo}</p>
        </li>
    )
}

export default CardEquipe
