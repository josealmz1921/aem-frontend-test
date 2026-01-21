import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from '.';
import { type Product } from '../../types/Product';
import { CartProvider } from '../../context/CartContext';

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,

  decorators: [
    (Story) => (
      <CartProvider>
        <Story />
      </CartProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

const baseProduct: Product = {
  id: 1,
  name: 'Moto Italika 150',
  price: '$25,000',
  image: 'https://via.placeholder.com/300',
  highlighted: false,
};

export const Default: Story = {
  args: {
    product: baseProduct,
  },
};

export const Highlighted: Story = {
  args: {
    product: {
      ...baseProduct,
      highlighted: true,
    },
  },
};

export const Mobile: Story = {
  args: {
    product: baseProduct,
  }
};