import contato from '../assets/contato.png'
import Botao from './Botao'
import CampoInput from './CampoInput'

const Contato = () => {
    return (
        <section id="contato" className="secao contato" aria-labelledby="titulo-contato">
            <div className="container grid-contato grid">

                <div className="caixa-formulario item">
                    <h2 id="titulo-contato" className="somente-leitor">Entre em contato para saber mais!</h2>

                    <form className="formulario" action="#" method="get">
                        <CampoInput
                            label="Nome"
                            id="nome"
                            name="nome"
                            placeholder="Digite seu nome"
                            required
                        />
                        <CampoInput
                            label="E-mail"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Digite seu e-mail"
                            required
                        />
                        <CampoInput
                            label="Telefone"
                            id="telefone"
                            name="telefone"
                            type="tel"
                            placeholder="Digite seu telefone"
                        />
                        <Botao type="submit">Enviar</Botao>
                    </form>
                </div>

                <figure className="imagem-contato item">
                    <img
                        src={contato}
                        alt="Imagem de contato com a equipe da Jovi"
                        width="600" height="640"
                        loading="lazy" />
                </figure>

            </div>
        </section>
    )
}

export default Contato