import { FC } from 'react';
import styled from 'styled-components';

interface TableBodyProps {
  column?: string;
  cbHandler?: () => void;
}

const TableBody: FC<TableBodyProps> = ({ column, children, cbHandler, ...props }) => (
  <TbContainer column={column} {...props} onClick={cbHandler}>
    {children}
  </TbContainer>
);

export default TableBody;

const TbContainer = styled.div<{ column?: string }>`
  display: grid;
  grid-template-columns: ${({ column }) => column ?? '20% 50% 30%'};
  align-items: center;
  width: 100%;
  padding: 8px 0;

  &:last-child {
    border-radius: 0 0 20px 20px;
  }
`;
