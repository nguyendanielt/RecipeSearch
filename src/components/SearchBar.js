import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

const SearchBarStyle = styled.form`
  text-align: center;

  div {
    margin: 45px 0px 40px 80px;
    position: relative;
    display: inline-block;
  }
  input {
    border-radius: 10px;
    border-style: solid;
    outline: none;
    padding-left: 35px;
    width: 500px;
    height: 40px;
    font-size: 16px;
    font-family: Verdana, Geneva, sans-serif;
    color: black;
  }
  svg {
    position: absolute;
    top: 15px;
    left: 10px;
  }
`;

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/searchresults/${search}`);
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <SearchBarStyle onSubmit={handleSubmit}>
      <div>
        <FaSearch />
        <input type="text" placeholder="Search for a recipe" onChange={handleChange} value={search} />
      </div>
    </SearchBarStyle>
  );
}

export default SearchBar;