import { FC, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Text from '../Text';
import { InputProps } from './types';

const InputLabel = styled(Text)<{ isFocus: boolean; isError?: boolean }>`
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${({ isError, isFocus, theme }) =>
    isError ? theme.colors.red : isFocus ? theme.colors.textPrimary : theme.colors.textPrimary};
`;

const StyledInput = styled.input<{
  width?: number;
  height?: number;
  bg?: string;
  radius?: number;
  isIcon?: boolean;
  isError?: boolean;
}>`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  padding: ${({ isIcon }) => (isIcon ? '12px 12px 12px 36px' : '18px 12px')};
  background: ${({ bg }) => (bg ? bg : 'transparent')};
  border-radius: ${({ radius }) => (radius ? `${radius}px` : '4px')};
  border: ${({ isError, theme }) =>
    isError ? `1px solid ${theme.colors.red}` : `1px solid ${theme.colors.textPrimary}`};
  box-sizing: border-box;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.textPrimary};

  &:hover {
    background: ${({ bg }) => (bg ? bg : 'transparent')};
    border: ${({ isError, theme }) =>
      isError ? `1px solid ${theme.colors.red}` : `1px solid ${theme.colors.textPrimary}`};
  }

  &:focus-visible {
    background: ${({ bg }) => (bg ? bg : 'transparent')};
    border: ${({ isError, theme }) =>
      isError ? `1px solid ${theme.colors.red}` : `1px solid ${theme.colors.textPrimary}`};
    outline: ${({ isError, theme }) =>
      isError ? `1px solid ${theme.colors.red}` : `1px solid ${theme.colors.textPrimary}`};
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: ${({ width }) => (width ? width : '311px')};
  }
`;

const InputText = styled(Text)<{ isFocus: boolean; isError?: boolean }>`
  margin-top: 6px;
  color: ${({ isError, isFocus, theme }) =>
    isError ? theme.colors.red : isFocus ? theme.colors.textPrimary : theme.colors.textPrimary};
`;

const Input: FC<InputProps> = ({
  id,
  label,
  name,
  value,
  type = 'text',
  placeholder = '',
  hint,
  isError,
  error,
  disabled,
  cbHandler,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (isError || error) setHasError(true);
    else setHasError(false);
  }, [error, isError]);

  const changeHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (cbHandler)
        cbHandler({
          name: e.target.name,
          value: e.target.value,
        });
    },
    [cbHandler],
  );

  const focusHandler = useCallback((state) => {
    setIsFocus(state);
  }, []);

  return (
    <>
      {label && (
        <InputLabel font="body2Medium" isFocus={isFocus} isError={hasError}>
          {label}
        </InputLabel>
      )}
      <StyledInput
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        isError={hasError}
        disabled={disabled}
        {...props}
        onMouseDown={() => focusHandler(true)}
        onBlur={() => focusHandler(false)}
        onChange={changeHandler}
      />
      {(hint || error) && (
        <InputText font="breadcrumbItalic" isFocus={isFocus} isError={hasError}>
          {hint || error}
        </InputText>
      )}
    </>
  );
};

export default Input;
