import Item from "./Item"


const ItemList = ({ items }) => {
    return (
        <section className="conteiner__products">
            {items.map((item) => {
                return <Item key={item.id} item={item} />
            })}
        </section>
    )
}

export default ItemList