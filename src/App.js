import './App.css';
import GetAllProfiles from './helpers/getAllProfiles';
import Profiles from './helpers/Profiles';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Navbar />
        <Searchbar />
        <Profiles />
      </div>
    </ThemeProvider>
  );
}

export default App;
