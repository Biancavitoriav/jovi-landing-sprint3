const Footer = () => {
    return (
        <footer class="rodape">
            <div class="container grid-rodape grid">

                <div class="marca-rodape item">
                    <p class="logo logo-clara">Smart<strong>Cam</strong></p>
                    <p class="texto-feat">Feat <span class="nome-jovi">JOVI</span></p>
                </div>

                <nav class="menu-rodape item" aria-label="Equipe no rodapé">
                    <h3>Equipe</h3>
                    <ul>
                        <li>Bianca Vitória Veloso</li>
                        <li>Gabriella Viana Lisboa</li>
                        <li>Maria Gabriela G Dantas</li>
                        <li>VIcente de Souza Stramantino</li>
                        <li>Felipe Cardozo</li>
                    </ul>
                </nav>

                <nav class="menu-rodape item" aria-label="Acesso rápido no rodapé">
                    <h3>Acesso rápido</h3>
                    <ul>
                        <li><a href="#solucao">Solução</a></li>
                        <li><a href="#publico">Público-alvo</a></li>
                        <li><a href="#galeria">Galeria</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </nav>

            </div>
        </footer>
    )
}
export default Footer;