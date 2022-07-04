import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const headers = [
  { title: 'Home', link: '/' },
  { title: 'Trade', link: '/trade' },
];

const Header = () => {
  return (
    <Container>
      <Ul>
        {headers.map((header) => (
          <li key={header.title}>
            <NavLink to={header.link}>{header.title}</NavLink>
          </li>
        ))}
      </Ul>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: sticky;
  top: 0;
  margin: 20px 0;
  background: yellow;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;

  li {
    list-style-type: none;
    margin: 0 10px;
    a {
      text-decoration: none;
    }
  }
`;
