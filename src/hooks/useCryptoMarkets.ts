import axios from 'axios';
import { useQuery } from 'react-query';

const COINGECKO_API = process.env.REACT_APP_COINGECKO_API as string;

const getCryptoMarkets = async (page: number): Promise<any> => {
  const { data } = await axios.get(
    `${COINGECKO_API}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`,
  );
  return data;
};

const useCryptoMarkets = (page: number) => {
  return useQuery(['post', page], () => getCryptoMarkets(page), {
    enabled: !!page,
  });
};

export default useCryptoMarkets;
