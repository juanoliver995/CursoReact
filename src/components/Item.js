import { Link } from "react-router-dom"

const Item = ({ item }) => {
    return (
        <article className="conteiner__products-cards">
            <h2>{item.title}</h2>
            <img src={item.image}></img>
            <p>Precio: ${item.price}</p>
            <div>
                <Link to={`/producto/${item.id}`}> Ver detalle</Link>
            </div>
        </article>
    )
}

export default Item