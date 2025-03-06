import AddToCart from './AddToCart'
import { toDollars } from '../constants';
export interface ItemsProps{
    image: {
        thumbnail: string;
        mobile: string;
        tablet: string;
        desktop: string;
    };
    name: string;
    category: string;
    price: number;
}

const Item = (props: ItemsProps) => {
  return (
    <div className='font-Red-Hat-Text'>
        <div className='relative'>
            <img className='w-[300px] rounded-lg' src={props.image.desktop} alt={props.name} />
            <div className='absolute top-0 w-full h-full flex justify-center items-end' >
                <AddToCart item={props}/>
            </div>
            
        </div>
        <div className='mt-10'>
            <p className='text-sm text-red-300'>{props.category}</p>
            <p className='font-semibold'>{props.name}</p>
            <span className='font-semibold text-Red'>{toDollars(props.price)}</span>
        </div>
        

    </div>
  )
}

export default Item