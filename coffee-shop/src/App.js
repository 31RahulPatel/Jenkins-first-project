import { useState } from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const coffees = [
    { id: 1, name: 'Espresso', price: 2.50 },
    { id: 2, name: 'Americano', price: 3.00 },
    { id: 3, name: 'Latte', price: 4.50 },
    { id: 4, name: 'Cappuccino', price: 4.00 }
  ];

  const addToCart = (coffee) => {
    setCart([...cart, coffee]);
    setTotal(total + coffee.price);
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>☕ Coffee Shop</h1>
      </header>
      
      <main className="main">
        <section className="menu">
          <h2>Menu</h2>
          <div className="coffee-grid">
            {coffees.map(coffee => (
              <div key={coffee.id} className="coffee-card">
                <h3>{coffee.name}</h3>
                <p className="price">${coffee.price.toFixed(2)}</p>
                <button onClick={() => addToCart(coffee)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>
        
        <section className="cart">
          <h2>Cart ({cart.length})</h2>
          <div className="cart-total">Total: ${total.toFixed(2)}</div>
          {cart.length > 0 && (
            <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
