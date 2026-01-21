import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import AddToCartButton from '../addToCartButton';
import { useCart } from '../../../context/CartContext';
import { type Product } from '../../../types/Product';

vi.mock('../../../context/CartContext', () => ({
  useCart: vi.fn(),
}));

const mockedUseCart = vi.mocked(useCart);

const product: Product = {
  id: 1,
  name: 'Moto Italika 150',
  price: '$25,000',
  image: 'test.jpg',
  highlighted: true,
};

describe('AddToCartButton', () => {
  beforeEach(() => {
    mockedUseCart.mockReturnValue({
      state: { items: [] },
      dispatch: vi.fn(),
    });
  });

  it('renderiza el botón correctamente', () => {
    render(<AddToCartButton product={product} />);

    expect(
      screen.getByText('Agregar al carrito')
    ).toBeInTheDocument();
  });

  it('ejecuta dispatch con ADD_ITEM al hacer click', () => {
    const dispatchMock = vi.fn();

    mockedUseCart.mockReturnValue({
      state: { items: [] },
      dispatch: dispatchMock,
    });

    render(<AddToCartButton product={product} />);

    fireEvent.click(
      screen.getByText('Agregar al carrito')
    );

    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'ADD_ITEM',
      payload: product,
    });
  });
});
