import { Dispatch, SetStateAction, useContext } from 'react'
import OrderItem from './OrderItem'
import { CartContext } from './CartProvider'
import { countAndSortObjects, toDollars } from '../constants'

const OrderModal = ({visibility, setVisibility, total} : {visibility: boolean, setVisibility: Dispatch<SetStateAction<boolean>>, total:number}) => {
    const context = useContext(CartContext)
    const sortedList = countAndSortObjects(context?.cartList!, "name")
  return (
    <>
    {visibility?
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center '>
            <div className='fixed top-0 left-0 w-full h-full bg-black opacity-60' onClick={() => setVisibility(false)}/>
            <div className='z-10 bg-white p-10 font-Red-Hat-Text rounded-lg w-[400px]'>
                <img src="/assets/images/icon-order-confirmed.svg" alt="confirmed" />
                <p className='text-3xl font-bold mt-2'>Order Confirmed</p>
                <p className='text-Rose_300 my-2'>We hope you enjoy the food</p>
                <div className='bg-Rose_50 rounded-lg p-5'>
                    {sortedList.map((item) => <OrderItem name={item.name} category={item.category} price={item.price} count={item.count} image={item.image}/>)}
                    <div className="flex justify-between items-center mt-5">
                        <p className="font-Red-Hat-Text font-semibold text-sm">Order Total</p>
                        <p className="text-black text-xl font-Red-Hat-Text font-bold">{toDollars(total)}</p>
                    </div>
                </div>
                    <div className="flex flex-col">
                        <button className="p-2 bg-Red my-5 rounded-full text-white font-bold hover:bg-rose-900 cursor-pointer">Start New Order</button>
                    </div>
                </div>
            </div>
        :   null 
    }
    </>
    
  )
}

export default OrderModal