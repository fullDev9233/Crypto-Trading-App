import { useState, useCallback } from 'react';
import styled from 'styled-components';
import useCryptoMarkets from '../../hooks/useCryptoMarkets';
import { Table, TableHeader, TableBody, Text, Pagination } from '../../components/Toolkit';

const headers = ['Id', 'Name', 'Icon', 'Price', 'Trade'];
const column =
  'minmax(80px, 12%) minmax(120px, 22%) minmax(120px, 22%) minmax(120px, 22%) minmax(120px, 22%)';

const Home = () => {
  const [page, setPage] = useState(1);

  const { status, data, error } = useCryptoMarkets(page);

  const renderByStatus = useCallback(() => {
    switch (status) {
      case 'loading':
        return <div>Loading...</div>;
      case 'error':
        if (error instanceof Error) {
          return <span>Error: {error.message}</span>;
        }
        break;
      default:
        return (
          <div>
            <Table>
              <TableHeader column={column} headers={headers} />
              {data.map((element: any, id: number) => (
                <TableBody key={element.id} column={column}>
                  <Text font="body3Regular" mx="24px">
                    {(page - 1) * 10 + id + 1}
                  </Text>
                  <Text font="captionRegular" mx="24px">
                    {element.name}
                  </Text>
                  <Image src={element.image} alt="Coin Icon" />
                  <Text font="captionRegular" mx="24px">
                    ${element.current_price.toFixed(2)}
                  </Text>
                </TableBody>
              ))}
            </Table>
            <Pagination page={page} setPage={setPage} />
          </div>
        );
    }
  }, [data, error, page, status]);

  return <Container>{renderByStatus()}</Container>;
};

export default Home;

const Container = styled.div`
  padding: 10px;
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
  margin: 0 24px;
`;
