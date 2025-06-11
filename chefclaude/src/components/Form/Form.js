import React, {useState} from "react";
import styles from "../Form/Form.module.css";
import ClaudeRecipe from './ ClaudeRecipe';
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./AIApi";


function Form(){

const [ingredients, setIngredients] = useState([])
const [recipe, setRecipe] = useState("");
  
async function getRecipe(){
        const generatedRecipe =  await getRecipeFromMistral(ingredients);
        setRecipe(generatedRecipe)
    }
 
   function addIngredient(formData){
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredient => [...prevIngredient, newIngredient]);
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
        {ingredients.length > 0 && <IngredientsList 
        ingredients={ingredients}
        getRecipe={getRecipe}/>}
            { recipe && <ClaudeRecipe recipe={recipe} />}
       </main>
    );
}

export default Form;


