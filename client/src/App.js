
import {Box} from '@mui/material';

//components
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Header />
      <Box style={{marginTop: 55}}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
