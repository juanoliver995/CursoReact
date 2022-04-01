import { Children, createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)

    const agregarProductos = (producto, cantidadSeleccionada) => {
        const carritoCopia = [...carrito];
        const itemAlCarrito = { ...producto, cantidadSeleccionada }
        if (yaExiste(producto.id)) {
            let index = carritoCopia.findIndex(item => item.id === producto.id);
            carrito[index].cantidad += cantidadSeleccionada;
            setCarrito(carritoCopia)
        } else {
            carritoCopia.push(itemAlCarrito)
            setCarrito(carritoCopia)
        }
        setCantidad(cantidad + cantidadSeleccionada)
        setTotal(total + producto.price * cantidadSeleccionada)

    }

    const yaExiste = (id) => {
        return carrito.some(item => item.id === id);
    }

    const borrarItem = (id) => {
        setCarrito(carrito.filter((item) => item.id !== id))
    }

    const vaciarCarrito = () => {
        setCarrito([])

    }
    const valorCotext = {
        carrito: carrito,
        agregarProductos: agregarProductos,
        cantidad: cantidad,
        vaciarCarrito: vaciarCarrito,
        borrarItem: borrarItem,
        total: total
    }
    return (
        <Provider value={valorCotext}>
            {children}
        </Provider >
    )
}

export default MiProvider