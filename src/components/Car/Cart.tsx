import { useCartStore } from "../../store/CartStore"
export const Cart = () => {
    const items = useCartStore( state => state.cart)
    const removeFromCart = useCartStore( state => state.removeFromCart)
    return(
        <div>
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