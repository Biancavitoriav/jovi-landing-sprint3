import publicoAlvo from '../assets/publico_alvo.png'
import Tag from './Tag'

const Publico = () => {
    return (
        <section id="publico" class="secao publico" aria-labelledby="titulo-publico">
            <div class="container">
                <header class="titulo-secao">
                    <Tag>Público-alvo</Tag>
                    <h2 id="titulo-publico">Ama aproveitar o momento <br /> e não focar na recordação</h2>
                    <p class="subtitulo">Para quem quer tirar fotos incríveis sem precisar entender de fotografia.</p>
                </header>

                <div class="grid-publico grid">
                    <figure class="imagem-publico item">
                        <img
                            src={publicoAlvo}
                            alt="Imagem de uma mulher tirando uma foto com a câmera da Jovi"
                            width="600" height="760"
                            loading="lazy" />
                    </figure>

                    <ul class="lista-cards item">
                        <li class="card">
                            <span class="icone-card icone-azul" aria-hidden="true"><i class="bx bx-heart"></i></span>
                            <h3>Amantes de momentos</h3>
                            <p>Pessoas que gostam de registrar encontros, festas e situações inesperadas, sem precisar parar tudo para configurar a câmera.</p>
                        </li>
                        <li class="card">
                            <span class="icone-card icone-laranja" aria-hidden="true"><i class="bx bx-map"></i></span>
                            <h3>Viagens</h3>
                            <p>Para quem quer guardar paisagens, lugares e experiências com qualidade, mesmo em condições diferentes de luz.</p>
                        </li>
                        <li class="card">
                            <span class="icone-card icone-rosa" aria-hidden="true"><i class="bx bx-group"></i></span>
                            <h3>Família e amigos</h3>
                            <p>Para quem ama registrar pessoas importantes sem precisar pedir várias vezes para repetir a foto.</p>
                        </li>
                        <li class="card">
                            <span class="icone-card icone-verde" aria-hidden="true"><i class="bx bx-check-circle"></i></span>
                            <h3>Praticidade</h3>
                            <p>Para quem prefere apontar, clicar e confiar que a IA fará os ajustes necessários..</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Publico;