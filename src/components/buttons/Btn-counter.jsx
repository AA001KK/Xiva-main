import { useState } from "react"
import DefaultBtn from "./DefaultBtn"
import Counter from "./counter"


export default function BtnCounter({ quantity, increment, decrement, maxCount }) {
    return quantity === 0 ? <DefaultBtn click={increment} txt={"main.buttons.booking"} /> : <Counter quantity={quantity} increment={increment} decrement={decrement} maxCount={maxCount} />
}
