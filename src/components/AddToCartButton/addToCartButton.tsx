import { type Product } from '../../types/Product';
import { useCart } from '../../context/CartContext';

const AddToCartButton = ({ product }: { product: Product }) => {
  const { dispatch } = useCart();

  return (
    <button className='addToCartButton' onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}>
      Agregar al carrito
    </button>
  );
};

export default AddToCartButton;
