import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { useContext, useState } from 'react';
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { contexto } from './context/CartContext';

const ItemDetail = ({ item }) => {
    const { agregarProductos } = useContext(contexto)

    const [cantidad, setCantidad] = useState(0)

    const onAdd = (cantidadSeleccionada) => {
        setCantidad(cantidadSeleccionada);
        agregarProductos(item, cantidadSeleccionada)
    }

    return (
        <article key={item.id} className="itemDetail">
            <div className="imagen"><img src={item.image} alt={item.title}></img></div>
            <div className="titulos" >
                <h2>{item.title}</h2>
                <p>${item.price}</p>
                <div>
                    <Rate allowHalf count={5} value={item.rating?.rate} />
                    <p className='rate'>Valoraciones: {item.rating?.count}</p>
                    <div>
                        {cantidad === 0
                            ? (<ItemCount stock={item.stock} initial={0} onAdd={onAdd} />)
                            : (<div>
                                <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
                                <div className='linkCarrito'>
                                    <Link to="/ShoppingCart">Ir al carrito</Link>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div >
            <p className="descripcion">{item.description}</p>
        </article >
    )
}

export default ItemDetail