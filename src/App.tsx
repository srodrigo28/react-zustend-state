import { AvailableProducts } from "./components/AppCart/AvailableProducts"
import { Cart } from "./components/AppCart/Cart"
import { Total } from "./components/AppCart/Total"

function App() {
  return (
    <>
      <Total />
      <AvailableProducts />
      <Cart />
    </>
  )
}

export default App
