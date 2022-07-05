import { FC, useRef, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';
import Text from '../Text';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import { ArrowDown } from '../../Svgs';
import { SelectProps } from './types';

const StyledLabel = styled(Text)<{ isFocus: boolean; isError?: boolean }>`
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${({ isError, isFocus, theme }) =>
    isError ? theme.colors.red : isFocus ? theme.colors.textPrimary : theme.colors.textPrimary};
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const StyledSelect = styled.button<{
  width?: number;
  height?: number;
  bg?: string;
  radius?: number;
  isFocus?: boolean;
  isError?: boolean;
  disabled?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  min-height: 54px;
  padding: 18px 12px;
  background: ${({ bg }) => (bg ? bg : 'transparent')};
  border-radius: ${({ radius }) => (radius ? `${radius}px` : '4px')};
  border: ${({ isError, isFocus, theme }) =>
    isError
      ? `1px solid ${theme.colors.red}`
      : isFocus
      ? `1px solid ${theme.colors.textPrimary} !important`
      : `1px solid ${theme.colors.textPrimary}`};
  box-sizing: border-box;

  &:hover {
    border: ${({ isError, theme }) =>
      isError ? `1px solid ${theme.colors.red}` : `1px solid ${theme.colors.textPrimary}`};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.primary};
    border: ${({ theme }) => `1px solid ${theme.colors.textPrimary}`};
    cursor: not-allowed;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: ${({ width }) => (width ? width : '311px')};
  }
`;

const StyledText = styled(Text)<{ isFocus: boolean; isError?: boolean }>`
  margin-top: 6px;
  color: ${({ isError, isFocus, theme }) =>
    isError ? theme.colors.red : isFocus ? theme.colors.textPrimary : theme.colors.textPrimary};
  &:hover {
    color: red;
  }
`;

const Select: FC<SelectProps> = ({
  id,
  label,
  value,
  options,
  hint,
  isError,
  isDivider,
  error,
  scrollHeight,
  disabled,
  cbHandler,
  hoverColor,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  const node = useRef<HTMLDivElement>(null);

  useOnClickOutside(node, () => {
    setIsDropdown(false);
    setIsFocus(false);
  });

  useEffect(() => {
    if (isError || error) setHasError(true);
    else setHasError(false);
  }, [error, isError]);

  const changeHandler = useCallback(() => {
    setIsDropdown(true);
    setIsFocus(true);
  }, []);

  const closeHandler = useCallback(
    (idx: number) => {
      setIsDropdown(false);
      setIsFocus(false);
      cbHandler(idx);
    },
    [cbHandler],
  );

  return (
    <>
      {label && (
        <StyledLabel font="body2Medium" isFocus={isFocus} isError={hasError}>
          {label}
        </StyledLabel>
      )}
      <SelectWrapper ref={node}>
        <StyledSelect
          id={id}
          isFocus={isFocus}
          isError={hasError}
          disabled={disabled}
          {...props}
          onClick={changeHandler}
        >
          <Text font="captionMedium">{value}</Text>
          <ArrowDown />
        </StyledSelect>
        {isDropdown && (
          <Dropdown
            options={options}
            isDivider={isDivider}
            scrollHeight={scrollHeight}
            hoverColor={hoverColor}
            closeHandler={closeHandler}
          />
        )}
      </SelectWrapper>
      {(hint || error) && (
        <StyledText font="breadcrumbItalic" isFocus={isFocus} isError={hasError}>
          {hint || error}
        </StyledText>
      )}
    </>
  );
};

export default Select;
