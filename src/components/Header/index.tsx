import { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import AuthModal from '../../components/AuthModal';
import { Button, Flex } from '../../components/Toolkit';
import { useAppSelector } from '../../hooks/useRedux';
import { selectIsLoggedIn, selectUserCreds } from '../../redux/authSlice';
import routers from '../../routers/routes';

const Header = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const user = useAppSelector(selectUserCreds);

  const [isOpened, setIsOpened] = useState(false);

  const onClose = useCallback(() => {
    setIsOpened(false);
  }, []);

  return (
    <>
      <Container>
        <Ul>
          {routers.map((router) => (
            <li key={router.title}>
              <NavLink to={router.path}>{router.title}</NavLink>
            </li>
          ))}
        </Ul>
        <UserInfo>
          {isLoggedIn ? (
            <div>{user.email}</div>
          ) : (
            <Button onClick={() => setIsOpened(true)}>Sign in</Button>
          )}
        </UserInfo>
      </Container>
      {isOpened && <AuthModal onClose={onClose} />}
    </>
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
