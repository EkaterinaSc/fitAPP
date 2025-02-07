import catalog from '../../../public/icons/katalog.png';
import trainLogo from '../../../public/icons/trainers.png';
import mainLogo from '../../../public/icons/application_18501263.png';
import styles from './header.module.scss'
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src={mainLogo} alt="fitAPP" />
                <span className={styles.span}>fitAPP</span>
            </div>
            <nav className={styles.navigation}>
                <ul className={styles.ul}>
                    <li className={styles.navItem}>
                        <Link to="/">
                            <img src={trainLogo} alt="Тренеры"/>
                            <span>Тренеры</span>
                        </Link>

                    </li>
                    <li className={styles.navItem}>
                        <Link to="/Comments">
                            <img src={catalog} alt="Отзывы"/>
                            <span>Отзывы</span>
                        </Link>

                    </li>
                </ul>
            </nav>
        </header>
    )
}