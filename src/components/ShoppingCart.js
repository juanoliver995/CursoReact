import { useContext } from "react"
import { contexto } from "./context/CartContext"

const ShoppingCart = () => {

    const { carrito, calcularTotal, borrarItem } = useContext(contexto)
    return (
        <div>
            <h1>carrito</h1>
            {carrito.map(producto => (
                <div key={producto.id}>
                    <p>{producto.title}</p>
                    <p>precio: ${producto.price} x cantidad: {producto.cantidad}</p>
                    <p>total parcial: {producto.price * producto.cantidad}</p>
                    <button onClick={borrarItem}>borrar</button>
                </div>
            ))}
            <h2>{calcularTotal()}</h2>
        </div>

    )
}

export default ShoppingCart