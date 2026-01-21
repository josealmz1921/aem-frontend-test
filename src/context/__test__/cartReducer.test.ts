import { describe, it, expect } from 'vitest';
import { reducer as cartReducer } from '../CartContext';
import { type Product } from '../../types/Product';
import type { CartState } from '../types';

const product: Product = {
  id: 1,
  name: 'Moto Italika 150',
  price: '$25,000',
  image: 'test.jpg',
  highlighted: true,
};

describe('cartReducer', () => {
  it('agrega un producto nuevo al carrito', () => {
    const initialState: CartState = { items: [] };

    const newState = cartReducer(initialState, {
      type: 'ADD_ITEM',
      payload: product,
    });

    expect(newState.items).toHaveLength(1);
    expect(newState.items[0].quantity).toBe(1);
  });

  it('incrementa la cantidad si el producto ya existe', () => {
    const initialState: CartState = {
      items: [{ ...product, quantity: 1 }],
    };

    const newState = cartReducer(initialState, {
      type: 'ADD_ITEM',
      payload: product,
    });

    expect(newState.items).toHaveLength(1);
    expect(newState.items[0].quantity).toBe(2);
  });

  it('elimina un producto del carrito', () => {
    const initialState: CartState = {
      items: [{ ...product, quantity: 1 }],
    };

    const newState = cartReducer(initialState, {
      type: 'REMOVE_ITEM',
      payload: product,
    });

    expect(newState.items).toHaveLength(0);
  });

  it('REMOVE_ITEM no hace nada si el producto no existe', () => {
    const initialState: CartState = { items: [] };

    const newState = cartReducer(initialState, {
      type: 'REMOVE_ITEM',
      payload: product,
    });

    expect(newState.items).toHaveLength(0);
  });
});
