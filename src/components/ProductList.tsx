import { ReactNode } from "react"
import Card from "./Card"

const ProductList = ({children} : {children: ReactNode}) => {

    return(
        <div className="flex flex-row flex-wrap">
        {children}
        </div>
    )
}
export default ProductList