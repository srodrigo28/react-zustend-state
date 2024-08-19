import { AvailableProducts } from "./AvailableProducts";
import { Cart } from "./Cart";
import { Total } from "./Total";

export function AppCart3(){
    return(
        <>
            <h1 className="bg-primary p-5 text-white fw-bold text-center">AppCart3</h1>
            <div className="container">
                <Total />
                <AvailableProducts />
                <Cart />
            </div>
        </>
    )
}