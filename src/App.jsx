import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { fetchCarts ,addCartItem} from './slices/cartSlice'
import {useDispatch,useSelector} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0)

  const a = {
    "id": 2999,
    "localid":uuidv4(),
    "title": "Patagonia Torrentshell 3L Jacket, Men's",
    "price": 199.99,
    "description": "A lightweight, packable rain jacket for everyday wear and outdoor adventures. The durable, 3-layer H2No® Performance Standard shell sheds rain and snow, while the breathable, recycled lining keeps you comfortable.",
    "category": "men's clothing",
    "image": "[invalid URL removed]_ UX679_.jpg",
    "rating": {
    "rate": 4.8,
    "count": 678
    }
    }
    const b = {
      "id": 2999,
      "localid":uuidv4(),
      "title": "5l Leather Jacket, Men's",
      "price": 199.99,
      "description": "A lightweight, packable rain jacket for everyday wear and outdoor adventures. The durable, 3-layer H2No® Performance Standard shell sheds rain and snow, while the breathable, recycled lining keeps you comfortable.",
      "category": "men's clothing",
      "image": "[invalid URL removed]_ UX670_.jpg",
      "rating": {
      "rate": 4.8,
      "count": 678
      }
      }

  return (
    <>
      <button onClick={() => dispatch(fetchCarts())}>Get Cart Items</button>
      <button onClick={() => dispatch(addCartItem(a))}> add cart item1</button>
      <button onClick={() => dispatch(addCartItem(b))}> add cart item2</button>

    </>
  )
}

export default App
