import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, useParams } from 'react-router-dom';
import { setConfiguration } from 'react-grid-system';


import { fetchGoods } from './store/goodsSlice';
import { fetchCategories } from './store/categoriesSlice';
import {setTheme} from './store/themeSlice';
import { selectTheme } from './store/selectors';

// Layout
import Layout from './layout/Layout';

import { gridCofiguration } from './pages/gridSettings';
// Pages
import IndexPage from './pages/index-page/IndexPage';
import CategoryPage from './pages/category-page/CategoryPage';
import Cart from './pages/cart/Cart';
import GoodPage from './pages/good-page/GoodPage';
import FormPage from './pages/form-page/FormPage';

function App() {
  const {category, goodId} = useParams();
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme)

  setConfiguration(gridCofiguration)

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchGoods());
    setDefaultTheme();
  }, [])


  // Set browser theme if theme not selected
  const browserTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  
  const setDefaultTheme = () => {
    if(theme === 'default'){
      dispatch(setTheme(browserTheme()))
    }
  }
 

  return (
    <div 
      className="App" 
      data-theme={theme} 
      style={{background: 'var(--main-bg)'}}
    >

      <Routes>
        <Route 
          path='/'
          element={<Layout />}
        >

          <Route index
            element={<IndexPage />}
          />

          <Route path='cart'
            element={<Cart />}
          />

          <Route path='form'
            element={<FormPage/>}
          />

          <Route path='categories/:category' 
            element={<CategoryPage/>}
          />

          <Route path='products/:goodId'
            element={<GoodPage/>}
          />
          
        </Route>
      </Routes>


    </div>
  );
}

export default App;
