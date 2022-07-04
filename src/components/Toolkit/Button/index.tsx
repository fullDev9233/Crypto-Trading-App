import styled from 'styled-components';

const Button = styled.button`
  padding: 12px 30px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textSecondary};
  border: none;
  font-family: NiramitRegular;
  font-size: 16px;
  line-height: 1.3;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.shadow02};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default Button;
