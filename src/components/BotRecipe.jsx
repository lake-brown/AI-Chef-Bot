import ReactMarkdown from "react-markdown";

const BotRecipe = (props) => {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Chef Bot Recommends:</h2>
      <ReactMarkdown> {props.recipe}</ReactMarkdown>
    </section>
  );
};

export default BotRecipe;
