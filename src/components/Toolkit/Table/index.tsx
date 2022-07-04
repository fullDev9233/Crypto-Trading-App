import { FC } from 'react';
import styled from 'styled-components';

export const TableTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 48px);
  margin: 24px 24px 16px;
`;

export { default as TableHeader } from './TableHeader';
export { default as TableBody } from './TableBody';
export { default as Pagination } from './Pagination';

export const Table: FC = ({ children }) => (
  <TableWrapper>
    <TableWrap>{children}</TableWrap>
  </TableWrapper>
);

const TableWrapper = styled.div`
  max-width: 100%;
  overflow: auto;
`;

const TableWrap = styled.div`
  display: table;
  width: 100%;
`;
