import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { GlobalStyle } from './Global.style';
import { Products } from './pages/Products';
import { Info } from './pages/Info';
import { Constacts } from './pages/Contacts';

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
            <Route path='products' element={<Products />}/>
            <Route path='info' element={<Info />}/>
            <Route path='contacts' element={<Constacts />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
