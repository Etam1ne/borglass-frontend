import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { GlobalStyle } from './Global.style';
import { Production } from './pages/Production';

const theme: DefaultTheme = {
  colors: {
    primaryLightblue: "#F9FEFF",
    primaryGreen: "#2F6E75",
    primaryDarkgreen: "#384F57",
  }
};

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='production' element={<Production />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
