import React, {useState} from "react";
import styles from "../Form/Form.module.css";

function Form(){

const ingredients = ["Chicken", "Oregano", "Tomatoes"];

const ingredientsListItem = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
))

   function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    ingredients.push(newIngredient);
    console.log(ingredients);
  } 

    return(
       <main className={styles.main}>
        <form className={styles.addIngredientForm} onSubmit={handleSubmit}>
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