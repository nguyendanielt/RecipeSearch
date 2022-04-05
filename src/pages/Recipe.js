import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../styles/RecipeDetailsStyle.css';

function Recipe() {
  const [recipeInfo, setRecipeInfo] = useState({});
  const [ingredients, setIngredients] = useState([]);
  let params = useParams();

  useEffect(() => {
    getRecipeInfo(params.id);
  }, [params.id]);

  const getRecipeInfo = async (recipeID) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const data = await api.json();
    setRecipeInfo(data);
    setIngredients(data.extendedIngredients);
  }

  let ingredientsList = "";
  ingredients?.map((ingredient) => {
    ingredientsList += `<li>${ingredient.original}</li>`;
  });

  const recipeDesc = `
    <div id="title">${recipeInfo.title}</div><br />
    <div><b>Ingredients:</b><ul>${ingredientsList}<ul><br /></div>
    <b>Instructions:</b><br />${recipeInfo.instructions}<br />
    <img id="recipe-image" src=${recipeInfo.image} alt=${recipeInfo.title} />
  `;

  return (
    <motion.div key={recipeInfo.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.75}}>
      <div id="recipe-container" dangerouslySetInnerHTML={{__html: recipeDesc}} />
    </motion.div>
  );
}

export default Recipe;