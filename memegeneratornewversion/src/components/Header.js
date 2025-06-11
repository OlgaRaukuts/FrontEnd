import trollFace from "./troll-face.png"
import styles from '../App.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <img 
                src={trollFace} 
                className={styles.headerImg}
            />
            <h1 className={styles.headerH1}>Meme Generator</h1>
        </header>
    )
}

export default Header;