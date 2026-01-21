import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';

import { CartProvider, useCart } from '../CartContext';
import { type Product } from '../../types/Product';

const product: Product = {
  id: 1,
  name: 'Moto Italika 150',
  price: '$25,000',
  image: 'test.jpg',
  highlighted: true,
};

const TestComponent = () => {
  const { state, dispatch } = useCart();

  return (
    <div>
      <span data-testid="count">{state.items.length}</span>
      <button
        onClick={() =>
          dispatch({ type: 'ADD_ITEM', payload: product })
        }
      >
        Add
      </button>
    </div>
  );
};

describe('CartProvider', () => {
  it('permite agregar productos usando el context', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    expect(screen.getByTestId('count')).toHaveTextContent('0');

    fireEvent.click(screen.getByText('Add'));

    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });
});
