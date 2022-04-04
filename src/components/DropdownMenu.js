import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const DropdownStyle = styled.div`
  select {
    padding-left: 7px;
    position: relative;
    float: right;
    top: 50px;
    right: 250px;
    width: 170px;
    height: 35px;
    font-size: 14px;
    font-family: Verdana, Geneva, sans-serif;
    border-radius: 5px;
    outline: none;
  }
`;

function DropdownMenu() {
  const navigate = useNavigate();

  const handleSelect = (event) => {
    navigate(`/selected/${event.target.value}`);
  }

  return (
    <DropdownStyle>
      <select onChange={handleSelect}>
        <option disabled selected>-- Select Cuisine --</option>
        <option>African</option>
        <option>American</option>
        <option>British</option>
        <option>Cajun</option>
        <option>Caribbean</option>
        <option>Chinese</option>
        <option>Eastern European</option>
        <option>European</option>
        <option>French</option>
        <option>German</option>
        <option>Greek</option>
        <option>Indian</option>
        <option>Irish</option>
        <option>Italian</option>
        <option>Japanese</option>
        <option>Jewish</option>
        <option>Korean</option>
        <option>Latin American</option>
        <option>Mediterranean</option>
        <option>Mexican</option>
        <option>Middle Eastern</option>
        <option>Nordic</option>
        <option>Southern</option>
        <option>Spanish</option>
        <option>Thai</option>
        <option>Vietnamese</option>
      </select>
    </DropdownStyle>
  );
}

export default DropdownMenu;