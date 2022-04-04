import {useState, useEffect} from 'react';
import {useParams, NavLink} from 'react-router-dom';
import '../styles/RecipeCardsStyle.css';

function Cuisine() {
  const [inputStr, setInputStr] = useState("");
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  const getCuisine = async (category) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=10&query=${category}&apiKey=${process.env.REACT_APP_API_KEY}`);
    const data = await api.json();
    setInputStr(category);
    setCuisine(data.results);
  }

  const recipes = cuisine?.map((recipe) => {
    return (
      <NavLink className="nav" key={recipe.id} to={`/recipe/${recipe.id}`}>
        <figure>
          <img src={recipe.image} alt={recipe.title} />
          <figcaption>{recipe.title}</figcaption>
        </figure>
      </NavLink>
    );
  });

  return (
    <div>
      <div id="category">{inputStr} Recipes</div>
      <div>
        {recipes?.map((recipe) => {
          return recipe;
        })}
      </div>
    </div>
  );
}

export default Cuisine;