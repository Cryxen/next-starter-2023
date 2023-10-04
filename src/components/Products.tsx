import { ReactNode } from "react"
import ProductItem from "./ProductItem"

const Products = ({children} : {children: ReactNode}) => {

    return(
        <div className="flex flex-row flex-wrap">
        {children}
        </div>
    )
}
export default Products