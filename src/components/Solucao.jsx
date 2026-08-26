import principal from '../assets/principal.png'
import sobre from '../assets/sobre.png'
import Tag from './Tag'

const Solucao = () => {
    return (
        <section id="solucao" className="secao topo" aria-labelledby="titulo-topo">
            <div className="container grid-topo grid">

                <div className="texto-topo item">
                    <h1 id="titulo-topo">Sua nova ferramenta favorita<br /> para <span className="destaque">registrar momentos</span></h1>
                    <p className="subtitulo">Tenha qualidade incrível com zero complicação, foco automático e ajuste de luz em tempo real para deixar suas fotos perfeitas em qualquer ambiente.</p>
                    <a href="#publico" className="botao botao-azul">Ver mais</a>
                </div>

                <figure className="imagem-topo item">
                    <img
                            src={principal}
                        alt="Imagem de um dos celulares da Jovi"
                        width="900" height="640"
                        loading="lazy" />
                </figure>

            </div>

            <div className="caixa-sobre">
                <div className="container grid-sobre grid">

                    <div className="texto-sobre item">
                        <Tag variante="clara">Sobre</Tag>
                        <h2>Tenha qualidade incrível com <strong>zero complicação</strong></h2>
                        <p className="subtitulo">Uma IA integrada na câmera que te proporciona...</p>

                        <ul className="lista-recursos">
                            <li>
                                <span className="icone-recurso" aria-hidden="true"><i className="bx bx-capture"></i></span>
                                <span>Foco automático</span>
                            </li>
                            <li>
                                <span className="icone-recurso" aria-hidden="true"><i className="bx bx-sun"></i></span>
                                <span>Ajuste de luz em tempo real</span>
                            </li>
                            <li>
                                <span className="icone-recurso" aria-hidden="true"><i className="bx bx-file"></i></span>
                                <span>Transcrição automática de documentos</span>
                            </li>
                        </ul>

                        <p className="nota-sobre">Você <strong>não precisa ser um fotográfo profissional </strong> para utilizar as câmeras da JOVI </p>
                        <p className="destaque-sobre">Basta ter nosso assistente!</p>
                    </div>

                    <figure className="imagem-sobre item">
                        <img
                            src={sobre}
                            alt="Imagem de um dos celulares da Jovi"
                            width="700" height="760"
                            loading="lazy" />
                    </figure>

                </div>
            </div>
        </section>
    )
}
export default Solucao