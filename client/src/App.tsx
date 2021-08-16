import { Suspense } from 'react';
import './assets/styles/global.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Routes from './Routes';
import { UserProvider } from './context/UserContext';

const queryClient = new QueryClient();

function App() {
  return (
    <Suspense fallback={<p>Loading... </p>}>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <Routes />
        </UserProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
