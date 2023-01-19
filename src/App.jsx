import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Basket from "./pages/Basket"
import Checkout from "./pages/Checkout"
import { ItemDetails } from "./pages/ItemDetails"
import WithNav from './WithNav'
import WithoutNav from './WithoutNav'
import Login from './pages/Login'
import Register from './pages/Register'
import { ItemProvider } from './context/ItemContext'
import { AuthProvider } from './context/AuthContext'
import { Search } from './pages/Search'
import { Account } from './pages/Account'
import { CategoryItems } from './pages/CategoryItems'
import { OrderSuccess } from './pages/OrderSuccess'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ItemProvider>
          <Routes>
            <Route element={<WithNav />}>
              <Route path="/" exact element={<Home />} />
              <Route path="/basket" exact element={<Basket />} />
              <Route path="/checkout" exact element={<Checkout />} />
              <Route path='/item/:slug' exact element={<ItemDetails />} />
              <Route path='/search/:query' element={<Search />} />
              <Route path='/account' element={<Account />} />
              <Route path='/categories/:slug' element={<CategoryItems />} />
            </Route>
            <Route element={<WithoutNav />}>
              <Route path='/login' exact element={<Login />} />
              <Route path='/register' exact element={<Register />} />
              <Route path='/order-success' element={<OrderSuccess />} />
            </Route>
          </Routes>
        </ItemProvider>
      </AuthProvider>
    </div>
  )
}

export default App
