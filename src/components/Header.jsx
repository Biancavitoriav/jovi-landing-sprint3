const Header = () => {
    return (
        <header className="cabecalho">
            <div className="container cabecalho-linha">
                <a href="#topo" className="logo" aria-label="Logo - página inicial">Smart<strong>Cam</strong></a>

                <input type="checkbox" id="abrir-menu" className="check-menu" />
                <label htmlFor="abrir-menu" className="botao-menu" aria-label="Abrir menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <nav className="menu" aria-label="Navegação principal">
                    <ul className="lista-menu" id="menu-principal">
                        <li><a href="#solucao" className="link-menu ativo">Solução</a></li>
                        <li><a href="#publico" className="link-menu">Público-alvo</a></li>
                        <li><a href="#galeria" className="link-menu">Galeria</a></li>
                        <li><a href="#equipe" className="link-menu">Nossa Equipe</a></li>
                        <li><a href="#contato" className="link-menu">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header