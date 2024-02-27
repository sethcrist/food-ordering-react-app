import './App.css';
import Menu from './components/Menue'
import {useState} from "react";

function App() {

  const [menuItems, setMenueItems] = useState([
    {order: "Brisket Plate", price: 12 },
    {order: "Ribs Platter", price: 14 },
    {order: "Pulled Pork Sandwhich", price: 10 },
    {order: "Beef Ribs Plate", price: 14 },
    {order: "Fries", price: 8 },
    {order: "Laded Fries", price: 13 },
    {order: "Daddy Plate", price: 30 },
    {order: "BBQ Chicken Plate", price: 14 },
    {order: "Meat Tacos", price: 9 },
    {order: "Burrito", price: 12 },
  ])
  const [orderList, setOrderList] = useState([])

  const addItem = (menuItems) => {
    setOrderList([...orderList, menuItems])
  }

  const totalPrice = orderList.reduce((total, item) => total + item.price, 0);
  const totalSale = (totalPrice * .09) + totalPrice

  return (
    <>
      <h1 className='header'>React BBQ</h1>
      <h2 className='sub-header'>Menu</h2>
      <div className='main'>
        {menuItems.map((menu, index) => {
          return (
              <Menu key={index}
                    order={menu.order}
                    price={menu.price}
                    addItem={addItem} />
          )
        })}
      </div>
      <div className='ordered'>
        <h1>Ordered Items</h1>

        <ul>
          {orderList.map((item, index) => (
              <li key={index}>
                {item.order} - ${item.price}
              </li>
          ))}
        </ul>
        <p className='total'>Total Price: ${totalSale}</p>
      </div>
      <br />
    </>
  );
}

export default App;
