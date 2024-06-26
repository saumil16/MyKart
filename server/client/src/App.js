
import {Box} from '@mui/material';

//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/dataProvider';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DetailView from './components/details/detailView';
import Cart from './components/cart/cart';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
          <Header />
          <Box style={{marginTop: 55}}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<DetailView />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </Box>
      </BrowserRouter>  
    </DataProvider>
  );
}

export default App;
