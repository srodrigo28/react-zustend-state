import { useCartStore } from "../../store/CartStore"
export const AvailableProducts = () => {
    const [items, addToCard] = useCartStore( (state) => [state.availableItems, state.addToCard])
    // const items = useCartStore( state => state.availableItems)
    // const addToCard = useCartStore( state => state.addToCard)
    return(
        <div>
            <h1>AvailableProducts</h1>
            <ul>
                { items.map(item => (
                    <li key={item.id}>
                        {item.product} - {item.category} - {item.price}
                        <button onClick={ () => addToCard(item)}>Adicionar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}