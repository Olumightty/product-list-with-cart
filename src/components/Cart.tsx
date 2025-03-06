import { useContext, useState } from "react"
import CartItem from "./CartItem"
import { CartContext } from "./CartProvider"
import { countAndSortObjects, toDollars } from "../constants"
import OrderModal from "./OrderModal"



const Cart = () => {
  const context = useContext(CartContext)
  const sortedList = countAndSortObjects(context?.cartList!, "name")
  const [visibility, setVisibility] = useState<boolean>(false)

  const totalAmount = () =>{ //find the order total using the reduce function
    const total= sortedList.reduce((acc, item) => {
      return acc + (item.count * item.price) 
    }, 0)
    return total
  }
  return (
    <div className="bg-white h-fit p-5 rounded-lg md:self-start ">
        <h1 className="text-xl font-bold font-Red-Hat-Text text-Red">Your Cart (<span>{sortedList.length}</span>)</h1>
        {sortedList.length > 0
          ? <>
              <div className="w-[300px] lg:w-[400px]">
                {sortedList.map((item) =>  <CartItem image={item.image} name={item.name} count={item.count} category={item.category} price={item.price}/>)}
              </div>
              <div className="flex justify-between items-center mt-5">
                <p className="font-Red-Hat-Text">Order Total</p>
                <p className="text-black text-3xl font-Red-Hat-Text font-bold">{toDollars(totalAmount())}</p>
              </div>
              <div className="bg-rose-50 my-5 p-5 flex gap-2 justify-center">
                  <img src="/assets/images/icon-carbon-neutral.svg" alt="carbon-neutral" />
                  <p>This is <span className="font-Red-Hat-Text font-bold">carbon-neutral </span>delivery</p>
              </div>
              <div className="flex flex-col">
                <button disabled={visibility} onClick={() => setVisibility(true)} className="p-5 bg-Red my-5 rounded-full text-white font-bold hover:bg-rose-900">Confirm Order</button>
              </div>
              <OrderModal visibility={visibility} setVisibility={setVisibility} total={totalAmount()}/>
            </>
          : <>
              <div className="w-[300px] lg:w-[400px] flex flex-col justify-center items-center">
                <img className="w-[200px]" src="/assets/images/illustration-empty-cart.svg" alt="empty" />
                <p className="text-sm font-Red-Hat-Text text-rose-300 text-center">Your added items will appear her</p>
              </div>
            </>
        
        }
        
        
    </div>
  )
}

export default Cart