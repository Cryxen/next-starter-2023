import { Product } from "@/features/responses/types"

const ProductItem = (props: Product) => {
    const {id, title, description, price, category, onDelete} = props

    const handleDelete = () => {
        onDelete?.(id)
    }

    return(
        <article className="border border-solid m-5 ">
        <h3 className="text-lg my-2">{title}</h3>
        <p>{category}</p>
        <p>{description}</p>
        <p>{price}</p>
        {onDelete ? <button onClick={handleDelete} className="border border-solid">Slett vare</button> : null}
        </article>
    )
}

export default ProductItem