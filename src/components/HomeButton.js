import {FaHome} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const HomeButtonStyle = styled.div`
  svg {
    position: relative;
    color: rgb(245, 120, 48);
    float: left;
    top: 47px;
    left 50px;
  }
`;

function HomeButton() {
  return (
    <HomeButtonStyle>
      <Link to="/">
        <FaHome size="40px" />
      </Link>
    </HomeButtonStyle>
  );
}

export default HomeButton;