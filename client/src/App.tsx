import { Suspense } from 'react';
import './assets/styles/global.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from './Routes';

const queryClient = new QueryClient();

function App() {
  return (
    <Suspense fallback={<p>Loading... </p>}>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
