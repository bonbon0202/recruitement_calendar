import { QueryClient, QueryClientProvider } from 'react-query';
import ReactDOM from "react-dom";
import ModalContext from './store/ModalContext';
import App from "./App";
import './styles/reset.scss';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ModalContext>
      <App />
    </ModalContext>
  </QueryClientProvider>,
  document.getElementById("root"));
