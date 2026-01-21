import { CartIcon } from '../Icons/icons';
import { useCart } from '../../context/CartContext';
import '../../clientlibs/header/header.css';

const Header = () => {
    const { state } = useCart();
    const totalItems = state.items.length;
    return (
        <header className="header">
            <h2>Italika Store</h2>
            <button className='cartButtonHeader'>
                {totalItems && <span>{totalItems}</span>}
                <CartIcon className='cartIcon' />
            </button>
        </header>
    )
}

export default Header;