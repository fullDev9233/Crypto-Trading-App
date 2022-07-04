import { FC, useState, ChangeEvent, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Flex from '../Flex';
import { ArrowLeft, ArrowRight, ArrowDoubleLeft, ArrowDoubleRight } from '../../Svgs';

interface PaginationProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Pagination: FC<PaginationProps> = ({ page, setPage }) => {
  const [toPage, setToPage] = useState('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setToPage(e.target.value);
  };

  const onGoTo = () => {
    if (!toPage) return;
    setPage(Number(toPage));
  };

  return (
    <Flex my="30px" align="flex-start">
      <StyledButton disabled={page < 2} onClick={() => setPage(1)}>
        <ArrowDoubleLeft />
      </StyledButton>
      <StyledButton disabled={page < 2} onClick={() => setPage((prev) => prev - 1)}>
        <ArrowLeft />
      </StyledButton>
      <StyledButton disabled={page > 999} onClick={() => setPage((prev) => prev + 1)}>
        <ArrowRight />
      </StyledButton>
      <StyledButton disabled={page > 999} onClick={() => setPage(1000)}>
        <ArrowDoubleRight />
      </StyledButton>
      <Flex ml="30px">
        <Input type="number" min="1" max="1000" value={toPage} onChange={changeHandler} />
        <StyledButton onClick={onGoTo}>Go</StyledButton>
      </Flex>
    </Flex>
  );
};

export default Pagination;

const StyledButton = styled(Button)`
  margin: 0 5px;
  padding: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows.shadow02};
`;

const Input = styled.input`
  width: 60px;
  height: 34px;
  text-align: center;
`;
