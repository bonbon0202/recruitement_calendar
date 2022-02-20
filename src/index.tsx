import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from "react-dom";
import App from "./App";
import './styles/reset.scss';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById("root"));
