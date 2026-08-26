import Bianca from '../assets/Bianca.png'
import Gabi from '../assets/Gabi.png'
import Maga from '../assets/Maga.png'
import Vicente from '../assets/Vicente.png'
import Felipe from '../assets/Felipe.png'
import CardEquipe from './CardEquipe'
import Tag from './Tag'

const integrantes = [
    { foto: Bianca, nome: 'Bianca Vitória Veloso', cargo: 'Web development' },
    { foto: Gabi, nome: 'Gabriella Viana Lisboa', cargo: 'Front-end Design' },
    { foto: Maga, nome: 'Maria Gabriela G Dantas', cargo: 'Front-end Design' },
    { foto: Vicente, nome: 'Vicente de Souza Stramantino', cargo: 'Web development' },
    { foto: Felipe, nome: 'Felipe Cardozo', cargo: 'Front-end Design' },
]

const Equipe = () => {
    return (

        <section id="equipe" className="secao equipe" aria-labelledby="titulo-equipe">
            <div className="container">
                <header className="titulo-secao titulo-direita">
                    <Tag escura>Nossa Equipe</Tag>
                    <h2 id="titulo-equipe" className="somente-leitor">Nossa Equipe</h2>
                </header>

                <ul className="grid-equipe grid">
                    {integrantes.map((integrante) => (
                        <CardEquipe key={integrante.nome} {...integrante} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default Equipe