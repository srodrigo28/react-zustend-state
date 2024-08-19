import { useCartStore } from "../../store/CartStore"
export const Cart = () => {
    const [items, removeFromCart] = useCartStore( (state) => [state.cart, state.removeFromCart]);
    // const items = useCartStore( state => state.cart)
    // const removeFromCart = useCartStore( state => state.removeFromCart)
    return(
        <div>
            <h1>Cart List</h1>
            <ul>
                { items.map(item => (
                    <li key={item.id}>
                        {item.product} - {item.category} - {item.price}
                        <button onClick={() => { removeFromCart(Number(item.id)) }}>
                            Remover
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}