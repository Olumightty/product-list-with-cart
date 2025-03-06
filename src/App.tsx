import Cart from "./components/Cart"
import CartProvider from "./components/CartProvider"
import Item from "./components/Item"
import shopList from "./constants"

function App() {

  return (
    <CartProvider>
      <div className="bg-Rose_50 w-[100vw] h-[100%] p-5 md:p-20 flex justify-center items-center flex-col md:flex-row gap-5 md:gap-10">
        <div className="">
          <h1 className="font-Red-Hat-Text font-bold text-3xl mb-5">Desserts</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {shopList.map((item) => <Item image={item.image} name={item.name} category={item.category} price={item.price}/>)}
          </div>
          
        </div>
        <Cart/>
      </div>
    </CartProvider>
   
  )
}

export default App
