import GlobalStyle from './styles/Global';
import Routes from './routes';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        autoClose={3500}
        position="top-right"
        limit={5}
        transition={Bounce}
      />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
