import React from "react";

const IngredientsList = (props) => {
  const ingredientsListItems = props.ingredients.map((item) => {
    return <li key={item}>{item}</li>;
  });
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>
      {props.ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.handleToggle}>Get a recipe</button>
        </div>
      )}
    </section>
  );
};

export default IngredientsList;
