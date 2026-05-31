import { Formulario } from '../Formulario/Formulario'
import banner from '../../assets/banner.png'
import style from './HeroSection.module.css'

export function HeroSection({ temas,adicionarEvento }) {
    return (
        <section className={style.banner}>
            <img src={banner} alt="Banner TechBoard" />
            <Formulario temas={temas} adicionarEvento={adicionarEvento}/>
        </section>
    )
}
