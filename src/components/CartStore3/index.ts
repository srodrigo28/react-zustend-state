import { create } from 'zustand' // biblioteca usada
// 1. tipagem do item
type Item = {
    id: number
    product: string
    category: string
    price: number
}
// 2. carga inicial pode vim da api
const initialItems : Item[] = [
    { id: 1, product: "TV",         category: "SmartTV",   price: 2000 },
    { id: 2, product: "Samsung i3", category: "Notebooks", price: 2500 },
    { id: 3, product: "PS4 Pro",    category: "Consoles",  price: 3000 }
]
// 3. Metodos services
type CardStore = {
    cart: Item[];
    availableItems: Item[];
    addToCard: (item: Item) => void;
    removeFromCart: (id: number) => void;
}
// 4. Construtores
export const useCartStore3 = create<CardStore>((set) => {
    return {
        cart: [],
        availableItems: initialItems,
        addToCard: (item) => set((state) => ({ cart: [...state.cart, item ]}) ),
        removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((item) => item.id !== id)}) ),
    };
});