import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

const ItemDetail = ({ item }) => {
    return (
        <article key={item.id} className="itemDetail">
            <div className="imagen"><img src={item.image}></img></div>
            <div className="titulos" >
                <h2>{item.title}</h2>
                <p>${item.price}</p>
                <div>
                    <Rate allowHalf count={5} value={item.rating?.rate} />
                    <p className='rate'>Valoraciones: {item.rating?.count}</p>
                </div>
            </div >
            <p className="descripcion">{item.description}</p>
        </article >
    )
}

export default ItemDetail