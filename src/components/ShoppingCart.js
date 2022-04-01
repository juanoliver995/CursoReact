import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { dataBase } from "../firebase/firebase"
import { contexto } from "./context/CartContext"

const ShoppingCart = () => {

    const { carrito, borrarItem, vaciarCarrito, total, cantidad } = useContext(contexto)


    const terminarCompra = () => {
        const orden = {
            buyer: {
                nombre: "Juan",
                telefono: "123456",
                email: "juankpo",
            },
            producto: carrito,
            date: serverTimestamp(),
            total: total

        }
        const ordenesCollection = collection(dataBase, "ordenes")
        const pedido = addDoc(ordenesCollection, orden)
        pedido
            .then(res => {
                console.log(res)
                toast.success(`Finalizando Comprra ID: ${res.id}`)
            }).catch(error => {
                toast.error("error")
            })
    }


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
                                <p>precio: ${producto.price} x cantidad: {producto.cantidadSeleccionada}</p>
                                <p>total parcial: {producto.price * producto.cantidadSeleccionada}</p>
                            </div>
                            <div>
                                <button onClick={() => borrarItem(producto.id)}>borrar</button>
                            </div>
                        </div>
                    ))}
                    <h2>total final :{total}</h2>
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <button onClick={terminarCompra}>Terminar Compra</button>
                </div> </>
            }

        </>
    )
}

export default ShoppingCart