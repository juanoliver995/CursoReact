import { useContext, useDebugValue } from "react"
import { Link } from "react-router-dom"
import { contexto } from "./context/CartContext"


const InfoCompra = ({ usuario }) => {

    const { vaciarCarrito } = useContext(contexto)

    return (
        <div className="contenedor_infoCompra">
            <div className="infoCompra">
                <h1>{usuario.nombre} gracias por tu compra</h1>
                <p>Recibiras tu pedido en {usuario.direccion}</p>
                <p>Ante cualquier inconveniente nos comunicaremos contigo</p>
                <p>via email a: {usuario.email}</p>
                <p>via telefono a: {usuario.telefono}</p>
                <div className="btn_infoComprador">
                    <Link to={"/"} onClick={vaciarCarrito}>Regresar al Inicio</Link >
                </div>
            </div>

        </div>
    )
}

export default InfoCompra