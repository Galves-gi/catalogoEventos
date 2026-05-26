import { Formulario } from '../formulario/formulario' 
import banner from '../../assets/banner.png'
import style from'./HeroSection.module.css'

export function HeroSection({eventos}) {
    return (
        <section className={style.banner}>
            <img src={banner} alt="Banner TechBoard" />
            <Formulario eventos={eventos} />
        </section>
    )
}
