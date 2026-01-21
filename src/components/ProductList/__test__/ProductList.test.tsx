import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProductList from '../productList';
import * as api from '../../../services/products.api';

describe('ProductList - empty state', () => {
  it('shows empty message when no products are returned', async () => {
    vi.spyOn(api, 'getProducts').mockResolvedValueOnce([]);

    render(<ProductList />);

    expect(
      await screen.findByText('No hay productos disponibles.')
    ).toBeInTheDocument();
  });
});

describe('ProductList - loading state', () => {
  it('shows loading message while fetching products', () => {
    vi.spyOn(api, 'getProducts').mockResolvedValueOnce([]);

    render(<ProductList />);

    expect(
      screen.getByText('Cargando productos...')
    ).toBeInTheDocument();
  });
});
