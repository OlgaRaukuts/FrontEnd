import styles from '../Form/Form.module.css';


function IngredientsList(props){

    const ingredientsListItem = props.ingredients.map(ingredient => (
    <li key={ingredient} className={styles.li}>{ingredient}</li>
))

     
    return(
<section>
                <h2>Ingredients on hand:</h2>
                <ul aria-live="polite" className={styles.ul}>{ingredientsListItem}</ul>
                {props.ingredients.length > 3 &&
                <div className={styles.recipeContainer}>
                    <div>
                        <h3 className={styles.h3}>Ready for a recipe?</h3>
                        <p className={styles.p}>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button className={styles.buttonGetRecipe} onClick={props.getRecipe}>Get a recipe</button>
                </div> }
            </section>
    )
}

export default IngredientsList;