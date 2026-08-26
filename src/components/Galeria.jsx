import Tag from './Tag'
import galeria1 from '../assets/galeria1.png'
import galeria2 from '../assets/galeria2.png'
import galeria3 from '../assets/galeria3.png'

const Galeria = () => {
    return (
        <section id="galeria" class="secao galeria" aria-labelledby="titulo-galeria">
            <div class="container">
                <header class="titulo-secao titulo-esquerda">
                    <Tag>Galeria</Tag>
                    <h2 id="titulo-galeria">Inteligência da câmera em ação</h2>
                    <p class="subtitulo">Identificação visual em tempo real para entregar a melhor versão da sua foto.</p>
                </header>

                <div class="grid-galeria grid">

                    <article class="card-galeria item">
                        <figure class="celular">
                            <img
                                src={galeria1}
                                alt="Imagem das funcionalidade da SmartCam"
                                width="380" height="700"
                                loading="lazy" />
                        </figure>
                        <p> A câmera reconhece a paisagem com pouca iluminação e sugere ativar o modo otimizado para destacar as cores, a água e os detalhes da vegetação sem escurecer a foto.</p>
                    </article>

                    <article class="card-galeria item">
                        <figure class="celular">
                            <img
                                src={galeria2}
                                alt="Imagem de um documento sendo capturado"
                                width="380" height="700"
                                loading="lazy" />
                        </figure>
                        <p>O visor ajusta as guias de enquadramento ao redor do documento para capturar apenas a área importante, corrigindo a perspectiva e garantindo leitura clara.</p>
                    </article>

                    <article class="card-galeria item">
                        <figure class="celular">
                            <img
                                src={galeria3}
                                alt="Imagem de IA de escaneamento de texto em ação"
                                width="380" height="700"
                                loading="lazy" />
                        </figure>
                        <p> A IA escaneia e destaca os blocos de texto presentes na imagem, permitindo selecionar, copiar ou traduzir o conteúdo com um simples toque na tela.</p>
                    </article>

                </div>
            </div>
        </section>
    );
}

export default Galeria;