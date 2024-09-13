
import style from './style.module.scss'
import Logo from '/src/assets/MyHeader.png'

export const Header = () => {
    return (
        <>
            <header className={style.header}>
               
                  <img src= {Logo} alt="" />  
                <nav>
                    <ul>
                        <li>
                            <button>Home</button>
                        </li>
                        <li>
                            <button>Sobre</button>

                        </li>
                        <li>
                            <button>Contato</button>
                        </li>
                        <li>
                            <button className={style.liDestaque}> Fale agora</button>

                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}