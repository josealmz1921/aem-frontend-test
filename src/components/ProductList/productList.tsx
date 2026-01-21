import { useEffect, useState } from 'react';
import { getProducts } from '../../services/products.api';
import { type Product } from '../../types/Product';
import ProductCard from '../ProductCard';
import '../../clientlibs/product-list/product-list.css';

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

    if (!filteredProducts.length) {
        return <p>No hay productos disponibles.</p>
    }

    return (
        <section className="product-list">
            <button className='button-filter' onClick={() => setShowHighlighted(!showHighlighted)}>
                {showHighlighted ? 'Mostrar todos' : 'Solo destacados'}
            </button>
            <div className='product-list-items'>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};


export default ProductList;
