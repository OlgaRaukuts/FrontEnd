 import styles from '../App.module.css'
 import {useState} from 'react';

 function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor", 
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    }
        
    );

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
                <img src={meme.imageUrl} className={styles.memeImg} />
                <span className={styles.memeSpanTop}>{meme.topText}</span>
                <span className={styles.memeSpanBottom}>{meme.bottomText}</span>
            </div>
        </main>
    )
}

export default Main;