import { FC, useState, FormEvent } from 'react';
import styled from 'styled-components';
import { Button, Flex, Input, Modal, InputCallbackProps } from '../Toolkit';
import { useAppDispatch } from '../../hooks/useRedux';
import { authAsync } from '../../redux/authSlice';

interface AuthInputProps {
  email: string;
  password: string;
}

interface AUthModalProps {
  onClose: () => void;
}

const AuthModal: FC<AUthModalProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();

  const [input, setInput] = useState<AuthInputProps>({
    email: '',
    password: '',
  });

  const changeHandler = ({ name, value }: InputCallbackProps) => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  const closeHandler = () => {
    onClose();
  };

  const onLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(authAsync(input));
    onClose();
  };

  return (
    <Modal>
      <Form onSubmit={onLogin}>
        <InputWrapper>
          <Input
            label="Email"
            name="email"
            value={input.email}
            required
            cbHandler={changeHandler}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            label="Password"
            name="password"
            type="password"
            value={input.password}
            required
            cbHandler={changeHandler}
          />
        </InputWrapper>
        <ButtonGroup>
          <Button onClick={closeHandler}>Close</Button>
          <Button type="submit">Log in</Button>
        </ButtonGroup>
      </Form>
    </Modal>
  );
};

export default AuthModal;

const Form = styled.form`
  width: calc(100% - 60px);
  margin: 50px 30px;
`;

const InputWrapper = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0;
`;

const ButtonGroup = styled(Flex)`
  justify-content: flex-end;
  margin-top: 25px;

  button {
    margin: 0 10px;
  }
`;
