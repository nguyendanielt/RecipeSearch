import Home from './Home';
import SearchResult from './SearchResult';
import Recipe from './Recipe';
import Cuisine from './Cuisine';
import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/searchresults/:search" element={<SearchResult />} />
        <Route path="/selected/:type" element={<Cuisine />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;