import { render, screen } from '@testing-library/react';
import ProductCard from '../productCard';
import { type Product } from '../../../types/Product';


const mockProduct: Product = {
    id: 1,
    name: 'Moto Italika 150',
    price: '$25,000',
    image: 'test.jpg',
    highlighted: true,
};

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
