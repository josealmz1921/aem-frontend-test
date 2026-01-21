import { memo } from 'react';
import '../../clientlibs/product-card/product-card.css';
import { type ProductCardProps } from './types';
import AddToCartButton from '../AddToCartButton';
import '../../clientlibs/add-to-cart-button/add-to-cart-button.css';

const ProductCard = memo(({ product }: ProductCardProps) => {
  if (!product) return null;

  return (
    <article className='productCardContainer'>
      <img src={'/img/noImage.png'} alt={product.name} width={200} />
      <h3 >{product.name}</h3>
      <p>{product.price}</p>

      {/* data-sly-test */}
      {product.highlighted && (
        <span style={{ color: 'green', fontWeight: 'bold' }}>
          Destacado
        </span>
      )}
      <AddToCartButton product={product} />
    </article>
  );
});

export default ProductCard;
