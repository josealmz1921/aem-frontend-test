import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import ProductCard from '../productCard';
import { type Product } from '../../../types/Product';
import { useCart } from '../../../context/CartContext';

const mockProduct: Product = {
  id: 1,
  name: 'Moto Italika 150',
  price: '$25,000',
  image: 'test.jpg',
  highlighted: true,
};

vi.mock('../../../context/CartContext', () => ({
  useCart: vi.fn(),
}));

const mockedUseCart = vi.mocked(useCart);

beforeEach(() => {
  mockedUseCart.mockReturnValue({
    state: { items: [] },
    dispatch: vi.fn(),
  });
});

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByText('Moto Italika 150')).toBeInTheDocument();
    expect(screen.getByText('$25,000')).toBeInTheDocument();
    expect(screen.getByText('Destacado')).toBeInTheDocument();
  });

  it('does not show highlighted label when product is not highlighted', () => {
    render(
      <ProductCard
        product={{ ...mockProduct, highlighted: false }}
      />
    );

    expect(screen.queryByText('Destacado')).not.toBeInTheDocument();
  });
});
