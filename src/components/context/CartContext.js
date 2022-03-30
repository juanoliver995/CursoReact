import { Children, createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const agregarProductos = (producto, cantidad) => {
        const carritoCopia = [...carrito];
        const itemAlCarrito = { ...producto, cantidad }
        if (yaExiste(producto.id)) {
            let index = carritoCopia.findIndex(item => item.id === producto.id);
            carrito[index].cantidad += cantidad;
            setCarrito(carritoCopia)
        } else {
            carritoCopia.push(itemAlCarrito)
            setCarrito(carritoCopia)
        }
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
    const calcularCantidad = () => {
        let cantidad = 0;
        carrito.forEach(item => cantidad += item.cantidad)
        return cantidad
    }
    const calcularTotal = () => {
        let total = 0;
        carrito.forEach(item => total += item.cantidad * item.price)
        return total
    }

    const valorCotext = {
        carrito: carrito,
        agregarProductos: agregarProductos,
        calcularCantidad: calcularCantidad,
        calcularTotal: calcularTotal,
        vaciarCarrito: vaciarCarrito,
        borrarItem: borrarItem,

    }
    return (
        <Provider value={valorCotext}>
            {children}
        </Provider >
    )
}

export default MiProvider