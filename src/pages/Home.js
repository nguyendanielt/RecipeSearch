import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';
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

  if (popular.length === 0) {
    return <div />;
  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.75}}>
      <div id="category">Trending Recipes</div>
      <div>
        {popularRecipes?.map((recipe) => {
          return recipe;
        })}
      </div>
    </motion.div>
  );
}

export default Home;