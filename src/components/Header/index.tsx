import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Flex } from '../../components/Toolkit';
import { useAppSelector } from '../../hooks/useRedux';
import { selectIsLoggedIn } from '../../redux/authSlice';
import routers from '../../routers/routes';

const Header = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  return (
    <Container>
      <Ul>
        {routers.map((router) => (
          <li key={router.title}>
            <NavLink to={router.path}>{router.title}</NavLink>
          </li>
        ))}
      </Ul>
      <UserInfo>{isLoggedIn ? <div>hello</div> : <Button>Sign in</Button>}</UserInfo>
    </Container>
  );
};

export default Header;

const Container = styled(Flex)`
  position: sticky;
  top: 0;
  margin: 30px 0;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;

  li {
    list-style-type: none;
    margin: 0 10px;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`;

const UserInfo = styled.div`
  position: absolute;
  right: 20px;
`;
