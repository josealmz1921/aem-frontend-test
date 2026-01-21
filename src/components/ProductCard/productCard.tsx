import { type Product } from '../../types/Product';
import { memo } from 'react';

interface Props {
  product: Product;
}

const ProductCard = memo(({ product }: Props) => {
  if (!product) return null;

  return (
    <article style={{ border: '1px solid #ddd', padding: 16 }}>
      <img src={product.image} alt={product.name} width={200} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>

      {/* data-sly-test */}
      {product.highlighted && (
        <span style={{ color: 'green', fontWeight: 'bold' }}>
          Destacado
        </span>
      )}
    </article>
  );
});

export default ProductCard;
