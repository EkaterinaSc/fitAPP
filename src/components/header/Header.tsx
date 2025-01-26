import logo from '../../../public/icons/logo.png';
import catalog from '../../../public/icons/katalog.png';
import trainLogo from '../../../public/icons/trainers.png';
import mainLogo from '../../../public/icons/application_18501263.png';
import styles from './header.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src={mainLogo} alt="fitAPP" />
                <span className={styles.span}>fitAPP</span>
            </div>
            <nav className={styles.navigation}>
                <div className={styles.navItem}>
                    <img src={logo} alt="Каталог тренировок"/>
                    <span>Тренировки</span>
                </div>
                <div className={styles.navItem}>
                    <img src={trainLogo} alt="Тренеры"/>
                    <span>Тренеры</span>
                </div>
                <div className={styles.navItem}>
                    <img src={catalog} alt="Отзывы"/>
                    <span>Отзывы</span>
                </div>
            </nav>
        </header>
    )
}