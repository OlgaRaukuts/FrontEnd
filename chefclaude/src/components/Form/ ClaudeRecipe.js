import Markdown from 'react-markdown'
import styles from '../Form/Form.module.css'

function ClaudeRecipe(props){

return(
<section className={styles.recipeContainer}>
    <div>
<Markdown>{props.recipe}</Markdown>
    </div>
</section>
);
}

export default ClaudeRecipe;