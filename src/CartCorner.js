import { Icon, InlineIcon } from '@iconify/react';
import shoppingCartSign from '@iconify-icons/el/shopping-cart-sign';

function CartCorner(props) {
    return (
        <>
            <label htmlFor="toggle" className="cartButton">
                <Icon icon={shoppingCartSign} />
                <p>{props.count}</p>
            </label>
            <input type="checkbox" id="toggle" />
        </>
    )
}

export default CartCorner