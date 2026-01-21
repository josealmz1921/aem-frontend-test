import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Summary from '../summary';
import { useCart } from '../../../context/CartContext';
import { type Product } from '../../../types/Product';
import type { Mock } from 'vitest';

// 👇 Mock del hook
vi.mock('../../../context/CartContext', () => ({
    useCart: vi.fn(),
}));

const mockedUseCart = useCart as unknown as Mock;

describe('Summary', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('muestra mensaje cuando el carrito está vacío', () => {
        mockedUseCart.mockReturnValue({
            state: { items: [] },
            dispatch: vi.fn(),
        });

        render(<Summary />);

        expect(screen.getByText('Carrito')).toBeInTheDocument();
        expect(screen.getByText('No hay productos')).toBeInTheDocument();
    });

    it('renderiza los productos del carrito', () => {
        const products: Product[] = [
            {
                id: 1, name: 'Producto 1', price: '100',
                "image": "https://via.placeholder.com/300",
                "highlighted": true
            },
            {
                id: 2, name: 'Producto 2', price: '200',
                "image": "https://via.placeholder.com/300",
                "highlighted": true
            },
        ];

        mockedUseCart.mockReturnValue({
            state: { items: products },
            dispatch: vi.fn(),
        });

        render(<Summary />);

        expect(screen.getByText('Producto 1')).toBeInTheDocument();
        expect(screen.getByText('Producto 2')).toBeInTheDocument();
    });

    it('ejecuta dispatch al hacer click en eliminar', () => {
        const product: Product = {
            "id": 1,
            "name": "Moto Italika 150",
            "price": "$25,000",
            "image": "https://via.placeholder.com/300",
            "highlighted": true
        };
        const dispatchMock = vi.fn();

        mockedUseCart.mockReturnValue({
            state: { items: [product] },
            dispatch: dispatchMock,
        });

        render(<Summary />);

        fireEvent.click(screen.getByText('Eliminar'));

        expect(dispatchMock).toHaveBeenCalledWith({
            type: 'REMOVE_ITEM',
            payload: product,
        });
    });

    it('renderiza un botón eliminar por cada producto', () => {
        mockedUseCart.mockReturnValue({
            state: {
                items: [
                    { id: 1, name: 'A', price: 10 },
                    { id: 2, name: 'B', price: 20 },
                ],
            },
            dispatch: vi.fn(),
        });

        render(<Summary />);

        expect(screen.getAllByText('Eliminar')).toHaveLength(2);
    });
});