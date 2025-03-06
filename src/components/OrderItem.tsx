import { toDollars } from "../constants"
import { ItemsProps } from "./Item"

const OrderItem = (props: ItemsProps & {count: number}) => {
    
  return (
    <>
    <div className="flex justify-between pb-2 items-centerfont-Red-Hat-Text">
        <div className="flex gap-2 items-center">
            <img className="w-[50px] rounded-lg" src={props.image.thumbnail} alt={props.name} />
            <div className="text-sm">
                <p className="font-semibold mb-2">{props.name}</p>
                <p className="text-Red font-semibold">{props.count}x <span className="text-red-900 font-normal">@ {toDollars(props.price)}</span></p>
            </div>
        </div>
        
        <p className="font-semibold text-Red">{toDollars(props.count * props.price)}</p>
        
    </div>
    <hr />
    </>
  )
}

export default OrderItem