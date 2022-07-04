import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { store } from '../redux/store';

const queryClient = new QueryClient();

const Provider: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ReduxProvider>
  </ThemeProvider>
);

export default Provider;
