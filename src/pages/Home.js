import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/RecipeCardsStyle.css';

function Home() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);
  
  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.REACT_APP_API_KEY}`);
    const data = await api.json(); 
    setPopular(data.recipes);
  }

  const popularRecipes = popular?.map((recipe) => {
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
      <div id="category">Trending Recipes</div>
      <div>
        {popularRecipes?.map((recipe) => {
          return recipe;
        })}
      </div>
    </div>
  );
}

export default Home;