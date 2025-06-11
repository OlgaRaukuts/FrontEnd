import React, {useState} from "react";
import styles from "../Form/Form.module.css";
import ClaudeRecipe from './ ClaudeRecipe';

function Form(){

const [ingredients, setIngredients] = useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )
const [recipeShown, setRecipeShown] = useState(false);

const ingredientsListItem = ingredients.map(ingredient => (
    <li key={ingredient} className={styles.li}>{ingredient}</li>
))


   function addIngredient(formData){
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredient => [...prevIngredient, newIngredient]);
    }

    function toggleRecipeShown(){
        setRecipeShown(preShown => !preShown);
    }
     

    return(
       <main className={styles.main}>
        <form className={styles.addIngredientForm} action={addIngredient}>
        <input 
        className={styles.input}
        type="text"
        placeholder="e.g. oregano"
        aria-label="Add ingredient"
        name="ingredient" />
        <button className={styles.button}>Add ingredient</button>
        </form>
        {ingredients.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul aria-live="polite" className={styles.ul}>{ingredientsListItem}</ul>
                {ingredients.length > 3 &&
                <div className={styles.recipeContainer}>
                    <div>
                        <h3 className={styles.h3}>Ready for a recipe?</h3>
                        <p className={styles.p}>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button className={styles.buttonGetRecipe} onClick={toggleRecipeShown}>Get a recipe</button>
                </div> }
            </section>}
            { recipeShown && <ClaudeRecipe />}
       </main>
    );
}

export default Form;


