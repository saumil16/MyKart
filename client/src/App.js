
import {Box} from '@mui/material';

//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/dataProvider';

function App() {
  return (
    <DataProvider>
        <Header />
        <Box style={{marginTop: 55}}>
          <Home />
        </Box>
    </DataProvider>
  );
}

export default App;
