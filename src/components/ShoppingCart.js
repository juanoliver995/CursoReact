import { useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./context/CartContext"

const ShoppingCart = () => {

    const { carrito, calcularTotal, borrarItem, vaciarCarrito } = useContext(contexto)


    return (
        <>
            {carrito.length === 0
                ? <div className="contendeorCarrito"><h1>Aun no tienes productos en el carrito</h1> <Link to="/" className="buttonAdd">Inicio</Link></div>
                : <><div className="contendeorCarrito">
                    <h1>carrito</h1>
                    {carrito.map(producto => (
                        <div key={producto.id} className="carrito">
                            <div className="imagenCarrito"><img src={producto.image}></img></div>
                            <div>
                                <p>{producto.title}</p>
                                <p>precio: ${producto.price} x cantidad: {producto.cantidad}</p>
                                <p>total parcial: {producto.price * producto.cantidad}</p>
                            </div>
                            <div>
                                <button onClick={() => borrarItem(producto.id)}>borrar</button>
                            </div>
                        </div>
                    ))}
                    <h2>{calcularTotal()}</h2>
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                </div> </>
            }

        </>
    )
}

export default ShoppingCart