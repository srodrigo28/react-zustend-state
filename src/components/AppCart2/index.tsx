import { Cart } from "./Cart";
import { Total } from "./Total";
import { AvailableProducts } from "./AvailableProducts";

export function AppCart2(){
    return(
        <>
            <h1 className="bg-primary p-3 text-center text-white fw-bold">Cart 2</h1>
            <div className="container">
                <Total />
                <AvailableProducts />
                <Cart />
            </div>
        </>
    )
}