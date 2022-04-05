import {useState, useEffect} from 'react';
import {useParams, NavLink} from 'react-router-dom';
import {motion} from 'framer-motion';
import '../styles/RecipeCardsStyle.css';

function SearchResult() {
  const [inputStr, setInputStr] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  let params = useParams();

  useEffect(() => {
    getSearchResult(params.search);
  }, [params.search]);
  
  const getSearchResult = async (search) => {
    const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?number=10&query=${search}&apiKey=${process.env.REACT_APP_API_KEY}`);
    const data = await api.json(); 
    setInputStr(search);
    setSearchResult(data.results);
  }

  const searchedRecipes = searchResult?.map((recipe) => {
    return (
      <NavLink className="nav" key={recipe.id} to={`/recipe/${recipe.id}`}>
        <figure>
          <img src={recipe.image} alt={recipe.title} />
          <figcaption>{recipe.title}</figcaption>
        </figure>
      </NavLink>
    );
  });

  if (searchResult.length === 0) {
    return <div />;
  }

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.75}}>
      <div id="category">Search Results for "{inputStr}"</div>
      <div>
        {searchedRecipes?.map((recipe) => {
          return recipe;
        })}
      </div>
    </motion.div>
  );
}

export default SearchResult;