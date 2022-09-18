import './CartWidget.css'
import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <div>
            <img class='cart' src={cart} alt='cart'/>
        </div>
    )
}

export default CartWidget