import type { Meta, StoryObj } from '@storybook/react';
import Summary from '.';
import { CartProvider } from '../../context/CartContext';

const emptyCartState = { items: [] };

const initialCartState = {
  items: [
    {
      id: 2,
      name: 'Producto en carrito',
      price: '$50,000',
      image: 'https://via.placeholder.com/300',
      highlighted: false,
      quantity: 1,
    },
  ],
};

const meta: Meta<typeof Summary> = {
  title: 'Components/Summary',
  component: Summary,

  decorators: [
    (Story, context) => {
      const args = context.args as { hasItems?: boolean };
      const state = args.hasItems ? initialCartState : emptyCartState;
      return (
        <CartProvider initialState={state}>
          <Story />
        </CartProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Summary>;

export const Default: Story = {
  args: {
    hasItems: false
  },
};

export const HasItems: Story = {
  args: {
    hasItems: true
  },
};
