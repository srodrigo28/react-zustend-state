import { AvailableProducts } from "./AvailableProducts";
import { Cart } from "./Cart";
import { Total } from "./Total";

export function AppCart(){
    return(
        <>
            <Total />
            <AvailableProducts />
            <Cart />
        </>
    )
}