import React, {useState} from "react";
import styles from "../Form/Form.module.css";

function Form(){

    const [ingredients, setIngredient] = useState([]);

const ingredientsListItem = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
))


   function addIngredient(formData){
    const newIngredient = formData.get("ingredient");
    setIngredient(prevIngredient => [...prevIngredient, newIngredient]);
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
        <ul>
            {ingredientsListItem}
        </ul>
       </main>
    );
}

export default Form;


