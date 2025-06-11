 import styles from '../App.module.css'

 function Main() {
    return (
        <main>
            <div className={styles.form}>
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        className={styles.formInput}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        className={styles.formInput}
                    />
                </label>
                <button className={styles.formButton}>Get a new meme image 🖼</button>
            </div>
            <div className={styles.meme}>
                <img src="http://i.imgflip.com/1bij.jpg" className={styles.memeImg} />
                <span className={styles.memeSpanTop}>One does not simply</span>
                <span className={styles.memeSpanBottom}>Walk into Mordor</span>
            </div>
        </main>
    )
}

export default Main;