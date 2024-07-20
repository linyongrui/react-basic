import { createContext, useContext } from "react";

const Ctx = createContext();

function GrandPa() {

    return (
        <Ctx.Provider value='grandPa'>
            <div>
                <div>this is GrandPa</div>
                <Father/>
            </div>
        </Ctx.Provider>
    )
}

function Father() {
    return (
        <div>
            <div>this is Father</div>
            <Son/>
        </div>
    )
}

function Son() {
    const grandPaName = useContext(Ctx)
    return (
        <div>
            <div>this is Son,grandPa Name:{grandPaName}</div>
        </div>
    )
}

export default GrandPa;