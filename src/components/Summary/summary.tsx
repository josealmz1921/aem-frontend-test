import { useCart } from "../../context/CartContext";
import { type Product } from "../../types/Product";
import '../../clientlibs/summary.css';

const Summary = () => {

  const { state, dispatch } = useCart();

  if (!state?.items?.length) {
    return (
      <div className="summaryNoItems">
        <h3>Carrito</h3>
        <p>No hay productos</p>
      </div>
    )
  }

  return (
    <div className="summary">
      {state?.items.map((item: Product) => {
        return (
          <div className="summary-item">
            <p>{item.name}</p>
            <button onClick={() => {
              dispatch({ type: 'REMOVE_ITEM', payload: item })
            }}>Eliminar</button>
          </div>
        )
      })}
    </div>
  );
};

export default Summary;
