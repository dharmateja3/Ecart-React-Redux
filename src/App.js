import './App.css';
import Headers from './components/Headers';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
      <Headers/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<CartDetails/>}/>
      </Routes>
      </Router>
    </Provider>
    </>
  );
}

export default App;
