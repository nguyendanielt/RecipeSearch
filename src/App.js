import HomeButton from './components/HomeButton';
import SearchBar from './components/SearchBar';
import DropdownMenu from './components/DropdownMenu';
import Pages from './pages/Pages';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomeButton />
        <DropdownMenu />
        <SearchBar />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
