import { useEffect, useState } from 'react';
import { getProducts } from '../../services/products.api';
import { type Product } from '../../types/Product';
import ProductCard from '../ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const data: Product[] = await getProducts();
            setProducts(data);
            setLoading(false);
        })()
    }, []);

    const [showHighlighted, setShowHighlighted] = useState(false);

    const filteredProducts = showHighlighted
        ? products.filter((p) => p.highlighted)
        : products;

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    if(!filteredProducts.length) {
        return <p>No hay productos disponibles.</p>
    }

    return (
        <section className="product-list">
            <button onClick={() => setShowHighlighted(!showHighlighted)}>
                {showHighlighted ? 'Mostrar todos' : 'Solo destacados'}
            </button>
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
};


export default ProductList;
