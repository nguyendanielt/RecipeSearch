import Home from './Home';
import SearchResult from './SearchResult';
import Recipe from './Recipe';
import Cuisine from './Cuisine';
import {Route, Routes} from 'react-router-dom';

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searchresults/:search" element={<SearchResult />} />
      <Route path="/selected/:type" element={<Cuisine />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
  );
}

export default Pages;