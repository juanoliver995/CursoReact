import { useContext, useState } from "react"
import { contexto } from "./context/CartContext"
import Form from "./Form"




const ShoppingCart = () => {

    const { carrito, borrarItem, vaciarCarrito, total, cantidad } = useContext(contexto)
    const [compra, setCompra] = useState(false)



    return (
        <>
            <div className="contendeorCarrito">
                <article className="contendorCarritoFinal">
                    <div className="title"><h1 >CARRITO</h1></div>
                    {carrito.map(producto => (
                        <div key={producto.id} className="carrito">
                            <img src={producto.image} className="imagenCarrito" alt={producto.title}></img>
                            <div className="carritoInformacion">
                                <div className="divDescrip">
                                    <h2 className="carritoTitulo">{producto.title}</h2>
                                    <p className="carritoDescription">{producto.description}</p>
                                    <p>Cantidad Seleccionada: {producto.cantidadSeleccionada}</p>
                                </div>
                                <div>
                                    <span className="productoPrecio">${producto.price * producto.cantidadSeleccionada}</span>
                                </div>
                            </div>
                            <div>
                                <button className="botonBorrar" onClick={() => borrarItem(producto.id)}>Borrar</button>
                            </div>
                        </div>
                    ))}
                    {carrito.length == 0
                        ? ""
                        :
                        <div>
                            <div className="carritoFinalizarCompra">
                                <h2>total final :{total}</h2>
                                <button className="botonesCarritoVaciar" onClick={vaciarCarrito}>Vaciar Carrito</button>
                                <button className="botonesCarrito" onClick={() => setCompra(true)}>Comprar</button>
                            </div>
                            <div className={`form ${!compra && "hidden"}`}>
                                <Form />
                            </div>
                        </div>
                    }
                </article>
            </div>
        </>
    )
}

export default ShoppingCart