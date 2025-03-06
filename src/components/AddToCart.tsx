import { useContext, useState } from 'react'
import { ItemsProps } from './Item'
import { CartContext } from './CartProvider'


const AddToCart = ({item}: {item: ItemsProps}) => {
    const [isHovering, setIsHovering] = useState<boolean>(false)
    const [itemCount, setItemCount] = useState<number>(0)
    const context = useContext(CartContext)

    const increment = () => {
        setItemCount((itemCount) => itemCount + 1)
        context?.addToCart(item)
    }
    const decrement = () => {
        if(itemCount > 0){
            setItemCount((itemCount) => itemCount - 1)
            context?.removeFromCart(item, "one")
        }
        
    }
  return (
    <div className='cursor-pointer' onMouseOver={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
    {!isHovering && itemCount == 0?
        <div className='flex gap-2 px-5 py-2 border-Red border-2 w-[200px] justify-center rounded-full bg-white -mb-5'>
            <img className='w-[30px]' src="assets/images/icon-add-to-cart.svg" alt="add to cart" />
            <p className='font-bold'>Add to Cart</p>
        </div>
        :
        <div className='flex items-center gap-2 bg-Red w-[200px] px-5 py-2 justify-between -mb-5 rounded-full'>
            <div onClick={decrement} className='border-2 w-[30px] h-[30px] items-center justify-center flex rounded-full cursor-pointer'>
                <img className='w-[10px]'  src="/assets/images/icon-decrement-quantity.svg" alt="decrement" />
            </div>
            <p className='font-semibold text-white font-Red-Hat-Text'>{itemCount}</p>
            <div onClick={increment}  className='border-2 w-[30px] h-[30px] justify-center items-center flex rounded-full cursor-pointer'>
                <img className='w-[10px]' src="/assets/images/icon-increment-quantity.svg" alt="increment" />
            </div>
        </div>
    }
    </div>
    
  )
}

export default AddToCart