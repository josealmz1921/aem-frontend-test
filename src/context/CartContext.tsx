import { createContext, useContext, useReducer } from 'react';
import { type Product } from '../types/Product';
import type { CartState } from './types';

type Action = { type: 'ADD_ITEM' | 'REMOVE_ITEM'; payload: Product };

const CartContext = createContext<any>(null);

export const reducer = (state: CartState, action: Action): CartState => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existing = state.items.find(
                (item) => item.id === action.payload.id
            );


            if (existing) {
                return {
                    items: state.items.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }

            return {
                items: [...state.items, { ...action.payload, quantity: 1 }],
            };
        }
        case 'REMOVE_ITEM': {
            const existing = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (existing) {
                return {
                    items: state.items.filter((item) =>
                        item.id !== action.payload.id
                    ),
                };
            }

            return {
                items: [...state.items],
            };
        }
        default:
            return state;
    }
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, { items: [] });

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
