import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { GlobalStyle } from './Global.style';
import { Products } from './pages/Products';
import { Constacts } from './pages/Contacts';
import { AdminProducts } from './pages/admin/AdminProducts';
import { AdminLayout } from './components/AdminLayout/AdminLayout';
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Auth } from './pages/Auth';

const theme: DefaultTheme = {
  colors: {
    primaryLightblue: "#F9FEFF",
    primaryGreen: "#2F6E75",
    primaryDarkgreen: "#384F57",
  }
};

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />}/>
              <Route path='products' element={<Products />}/>
              <Route path='contacts' element={<Constacts />}/>
            </Route>
            <Route path='admin' element={<AdminLayout />}>
              <Route index element={<AdminProducts />}/>
            </Route>
            <Route path='auth' element={<Auth isAdmin={false} isLogin={false}/>}/>
            <Route path='admin/auth' element={<Auth isAdmin={true} isLogin={true}/>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}
