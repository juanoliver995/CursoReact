import Item from "./Item"

export default function ItemList({ items }) {
    return (
        <section className="conteiner__products">
            {items.map(item => (
                <div>
                    <Item key={item.id} item={item} />
                </div>
            ))}
        </section>
    )
}

