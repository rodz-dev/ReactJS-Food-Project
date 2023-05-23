import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {

  const [isCartShown, setIsCartShown] = useState(false)

  function showCartHandler(){
    setIsCartShown(true)
  }

  function hideCartHandler(){
    setIsCartShown(false)
  }

  return (
    <CartProvider>
      {isCartShown && <div>Cart....</div>}
      <Header onShownCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
