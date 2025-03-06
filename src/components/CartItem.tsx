import { useContext } from "react";
import { toDollars } from "../constants";
import  { ItemsProps } from "./Item";
import { CartContext } from "./CartProvider";

const CartItem = (props: ItemsProps & {
    count: number;
}) => {
    const context = useContext(CartContext)
  return (
    <>
    <div className=" flex justify-between py-3 items-center">
        <div className="font-Red-Hat-Text">
            <p className="font-semibold">{props.name}</p>
            <p className="text-Red font-semibold">{`${props.count}x`} <span className="text-red-900 font-normal">{`@ ${toDollars(props.price)}`} <span className="font-semibold">{toDollars(props.count * props.price)}</span></span></p>
        </div>
        <div onClick={() => context?.removeFromCart(props, "all")} className="p-1 hover:border-black hover:border-2 rounded-full cursor-pointer">
            <img src="/assets/images/icon-remove-item.svg" alt="remove" />
        </div>
    </div>
    <hr />
    </>
  )
}

export default CartItem