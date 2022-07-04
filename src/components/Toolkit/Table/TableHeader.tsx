import { FC } from 'react';
import styled from 'styled-components';
import Text from '../Text';

interface TableHeaderProps {
  column?: string;
  headers: string[];
  ml?: string;
  mr?: string;
}

const TableHeader: FC<TableHeaderProps> = ({ column, headers, ml = '24px', mr = '24px' }) => (
  <ThContainer column={column}>
    {headers.map((header, id) => (
      <Text key={id} font="h3Bold" color="textPrimary" ml={ml} mr={mr}>
        {header}
      </Text>
    ))}
  </ThContainer>
);

export default TableHeader;

const ThContainer = styled.div<{ column?: string }>`
  display: grid;
  grid-template-columns: ${({ column }) => column ?? '20% 50% 30%'};
  width: 100%;
  padding: 8px 0;
`;
